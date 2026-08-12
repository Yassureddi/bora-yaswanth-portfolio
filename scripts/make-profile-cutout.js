const sharp = require("sharp");
const path = require("path");

const src = path.join(
  __dirname,
  "../public/profile/bora-yaswanth-source.png"
);
const rawOut = path.join(__dirname, "../public/profile/bora-yaswanth.png");
const cutout = path.join(
  __dirname,
  "../public/profile/bora-yaswanth-cutout.png"
);

function isPersonPixel(r, g, b) {
  const br = (r + g + b) / 3;
  // Dark hair / black shirt
  if (br < 85) return true;
  // Warm skin tones
  if (r > 90 && r >= g && r > b && r - b > 15 && br < 230) return true;
  // Mid beard / facial detail
  if (br < 140 && Math.abs(r - g) < 40) return true;
  return false;
}

function isBackdrop(r, g, b) {
  const br = (r + g + b) / 3;
  const sp = Math.max(r, g, b) - Math.min(r, g, b);
  if (isPersonPixel(r, g, b)) return false;

  // White page
  if (br >= 245) return true;
  // Light / soft blue gradient & photo bg
  if (br >= 155 && b >= r - 10 && sp < 70) return true;
  if (br >= 180 && sp < 45) return true;
  return false;
}

async function main() {
  const meta = await sharp(src).metadata();
  const W = meta.width || 513;
  const H = meta.height || 541;

  // Crop person region from the composition screenshot
  const left = Math.round(W * 0.22);
  const top = Math.round(H * 0.14);
  const width = Math.round(W * 0.56);
  const height = Math.round(H * 0.72);

  await sharp(src)
    .extract({ left, top, width, height })
    .png()
    .toFile(rawOut);

  const size = 800;
  const { data, info } = await sharp(rawOut)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const ch = info.channels;

  // Pass 1: flood-fill from edges
  const visited = new Uint8Array(w * h);
  const queue = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const idx = y * w + x;
    if (visited[idx]) return;
    const i = idx * ch;
    if (!isBackdrop(data[i], data[i + 1], data[i + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    data[idx * ch + 3] = 0;
    const x = idx % w;
    const y = (idx - x) / w;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  // Pass 2: remove ALL remaining backdrop-colored pixels (enclosed light-blue pockets)
  for (let i = 0; i < data.length; i += ch) {
    if (data[i + 3] === 0) continue;
    if (isBackdrop(data[i], data[i + 1], data[i + 2])) {
      data[i + 3] = 0;
    }
  }

  // Pass 3: soft organic mask + bottom curve
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * ch;
      if (data[i + 3] === 0) continue;

      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const br = (r + g + b) / 3;
      const sp = Math.max(r, g, b) - Math.min(r, g, b);

      // Soft fringe on leftover light edges
      if (br > 150 && sp < 55 && b >= r - 15 && !isPersonPixel(r, g, b)) {
        data[i + 3] = Math.round(data[i + 3] * 0.15);
      }

      const nx = (x / (w - 1) - 0.5) / 0.39;
      const ny = (y / (h - 1) - 0.32) / 0.5;
      const d = Math.sqrt(nx * nx + ny * ny);
      let oval = 1;
      if (d > 0.8) {
        oval = Math.max(0, 1 - (d - 0.8) / 0.3);
        oval = Math.pow(oval, 1.1);
      }

      const fy = y / (h - 1);
      let bottom = 1;
      if (fy > 0.66) {
        bottom = 1 - Math.pow((fy - 0.66) / 0.34, 0.7);
      }

      data[i + 3] = Math.round(data[i + 3] * oval * Math.max(0, bottom));
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: ch } })
    .png()
    .toFile(cutout);

  console.log("profile cutout updated from provided image");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

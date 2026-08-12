const sharp = require("sharp");
const path = require("path");

const src = path.join(
  __dirname,
  "../public/profile/bora-yaswanth-source.png"
);

async function main() {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const ch = info.channels;

  // Find likely rectangular portrait: look for hard vertical edges
  // Sample center column for face skin
  console.log("size", w, h);

  // Dump a coarse brightness map
  for (let y = 0; y < h; y += 40) {
    const row = [];
    for (let x = 0; x < w; x += 40) {
      const i = (y * w + x) * ch;
      const br = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);
      row.push(String(br).padStart(3, " "));
    }
    console.log("y" + String(y).padStart(3, "0"), row.join(" "));
  }

  // Sample center for face
  const cx = Math.floor(w / 2);
  const cy = Math.floor(h / 2);
  const i = (cy * w + cx) * ch;
  console.log("center rgb", data[i], data[i + 1], data[i + 2], "a", data[i + 3]);
}

main();

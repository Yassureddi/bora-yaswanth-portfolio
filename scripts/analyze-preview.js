const sharp = require("sharp");

async function main() {
  const cut = await sharp(
    "e:/Portfolio/public/profile/bora-yaswanth-cutout.png"
  )
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = cut.info.width;
  const h = cut.info.height;
  const ch = cut.info.channels;
  const d = cut.data;

  // Sample a grid
  console.log("=== cutout alpha grid ===");
  for (let y = 40; y < h; y += 80) {
    const row = [];
    for (let x = 40; x < w; x += 80) {
      const i = (y * w + x) * ch;
      row.push(String(d[i + 3]).padStart(3, " "));
    }
    console.log("y" + y, row.join(" "));
  }

  // Count opaque near-white
  let paleOpaque = 0;
  let paleSemi = 0;
  for (let i = 0; i < d.length; i += ch) {
    const a = d[i + 3];
    const br = (d[i] + d[i + 1] + d[i + 2]) / 3;
    const sp = Math.max(d[i], d[i + 1], d[i + 2]) - Math.min(d[i], d[i + 1], d[i + 2]);
    if (br > 200 && sp < 35) {
      if (a > 200) paleOpaque++;
      else if (a > 30) paleSemi++;
    }
  }
  console.log({ paleOpaque, paleSemi });

  // Preview: detect non-blue pale rectangles
  const prev = await sharp("e:/Portfolio/public/profile/_preview-compose.png")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const pw = prev.info.width;
  const pd = prev.data;
  const pc = prev.info.channels;

  let creamOnBlue = 0;
  // Sample left of face area (should be blue if cutout works)
  for (let y = 150; y < 400; y += 4) {
    for (let x = 80; x < 180; x += 4) {
      const i = (y * pw + x) * pc;
      const r = pd[i];
      const g = pd[i + 1];
      const b = pd[i + 2];
      // cream/white (not blue)
      if (r > 200 && g > 200 && b > 190 && b < 230 && Math.abs(r - b) < 30) {
        creamOnBlue++;
      }
    }
  }
  console.log({ creamOnBlueLeftBand: creamOnBlue });

  // Sample expected blue area
  const iBlue = (200 * pw + 100) * pc;
  console.log("sample left of subject rgb", pd[iBlue], pd[iBlue + 1], pd[iBlue + 2]);
  const iFace = (280 * pw + 360) * pc;
  console.log("sample face rgb", pd[iFace], pd[iFace + 1], pd[iFace + 2]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

const sharp = require("sharp");
const path = require("path");

async function main() {
  const cutout = path.join(
    __dirname,
    "../public/profile/bora-yaswanth-cutout.png"
  );
  const { data, info } = await sharp(cutout)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const ch = info.channels;

  let transparent = 0;
  let opaque = 0;
  const corners = [
    [2, 2],
    [w - 3, 2],
    [2, h - 3],
    [w - 3, h - 3],
  ];

  for (const [x, y] of corners) {
    const i = (y * w + x) * ch;
    console.log("corner", x, y, "a=", data[i + 3], "rgb", data[i], data[i + 1], data[i + 2]);
  }

  let creamOpaque = 0;
  for (let i = 0; i < data.length; i += ch) {
    const a = data[i + 3];
    if (a === 0) transparent++;
    else if (a > 240) opaque++;
    if (a > 200) {
      const br = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const sp =
        Math.max(data[i], data[i + 1], data[i + 2]) -
        Math.min(data[i], data[i + 1], data[i + 2]);
      if (br > 205 && sp < 30) creamOpaque++;
    }
  }

  console.log({ transparent, opaque, creamOpaque, total: w * h });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

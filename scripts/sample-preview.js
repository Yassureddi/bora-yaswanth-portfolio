const sharp = require("sharp");

async function main() {
  const prev = await sharp("e:/Portfolio/public/profile/_preview-compose.png")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = prev.info.width;
  const d = prev.data;
  const c = prev.info.channels;

  const sample = (x, y, label) => {
    const i = (y * w + x) * c;
    console.log(
      label,
      "xy",
      x,
      y,
      "rgb",
      d[i],
      d[i + 1],
      d[i + 2]
    );
  };

  // Inside blue circle, left of head (should be blue if cutout works)
  sample(220, 220, "left-of-head");
  sample(220, 300, "left-of-shoulder");
  sample(500, 220, "right-of-head");
  sample(360, 120, "above-head");
  sample(360, 280, "face");
  sample(360, 520, "below-chest");
  sample(360, 620, "near-bottom-curve");
  sample(100, 360, "outside-or-edge");
  sample(360, 50, "top-outside");
}

main();

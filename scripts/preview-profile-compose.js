const sharp = require("sharp");
const path = require("path");

async function main() {
  const size = 720;
  const cutoutPath = path.join(
    __dirname,
    "../public/profile/bora-yaswanth-cutout.png"
  );
  const preview = path.join(
    __dirname,
    "../public/profile/_preview-compose.png"
  );

  const svg = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#dbe7ff"/>
          <stop offset="40%" stop-color="#b8ccff"/>
          <stop offset="72%" stop-color="#7aa3f7"/>
          <stop offset="100%" stop-color="#5f8ff5"/>
        </linearGradient>
        <clipPath id="blob">
          <ellipse cx="360" cy="360" rx="300" ry="300"/>
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill="#ffffff"/>
      <ellipse cx="360" cy="360" rx="300" ry="300" fill="url(#g)"/>
    </svg>
  `);

  const portraitSize = Math.round(size * 0.7);
  const portrait = await sharp(cutoutPath)
    .resize(portraitSize, Math.round(portraitSize * 1.05), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const meta = await sharp(portrait).metadata();
  const pw = meta.width || portraitSize;
  const ph = meta.height || portraitSize;
  const left = Math.round((size - pw) / 2);
  const top = Math.round((size - ph) / 2 - 20);

  await sharp(svg)
    .png()
    .composite([{ input: portrait, left, top }])
    .toFile(preview);

  console.log("preview written");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

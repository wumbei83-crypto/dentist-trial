import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('Usage: node convert_icon.js <path-to-your-image>');
    process.exit(1);
}

const inputPath = path.resolve(args[0]);
const baseName = path.parse(inputPath).name;
const outputPath = path.resolve(`./src/assets/${baseName}.webp`);

if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
}

sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(info => {
        console.log(`✅ Success! Converted your image to WEBP.`);
        console.log(`Saved at: ${outputPath}`);
    })
    .catch(err => {
        console.error('❌ Error converting image:', err);
    });

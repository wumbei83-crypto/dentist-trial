const sharp = require('sharp');
const fs = require('fs');

const files = ['aesthetic', 'implantology', 'surgical', 'whitening'];
const targetDir = './src/assets/';

async function convert() {
  for (const name of files) {
    const pngPath = targetDir + name + '.png';
    const webpPath = targetDir + name + '.webp';
    if (fs.existsSync(pngPath)) {
      await sharp(pngPath).webp({ quality: 80 }).toFile(webpPath);
      fs.unlinkSync(pngPath);
      console.log('Converted:', name);
    }
  }
}
convert().catch(console.error);

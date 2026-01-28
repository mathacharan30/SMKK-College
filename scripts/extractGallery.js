
// Script to scan for gallery images
import fs from 'fs';
import path from 'path';

const galleryDir = 'd:/documents/app/public/images/gallery';
const outputPath = 'd:/documents/app/src/data/galleryData.js';

if (fs.existsSync(galleryDir)) {
    const files = fs.readdirSync(galleryDir)
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map(file => `/images/gallery/${file}`);

    const content = `export const galleryImages = ${JSON.stringify(files, null, 2)};`;

    fs.writeFileSync(outputPath, content);
    console.log(`Exported ${files.length} gallery images.`);
}

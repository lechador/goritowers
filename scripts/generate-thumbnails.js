const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
    { source: path.join(process.cwd(), 'public/apts'), dest: path.join(process.cwd(), 'public/apts/thumbnails') },
    { source: path.join(process.cwd(), 'public/apts/new'), dest: path.join(process.cwd(), 'public/apts/new/thumbnails') }
];

async function generateThumbnails() {
    console.log('Generating thumbnails...');
    
    for (const dir of targetDirs) {
        if (!fs.existsSync(dir.source)) {
            console.log(`Source directory not found: ${dir.source}`);
            continue;
        }

        if (!fs.existsSync(dir.dest)) {
            fs.mkdirSync(dir.dest, { recursive: true });
        }

        const files = fs.readdirSync(dir.source);
        
        for (const file of files) {
            if (!file.endsWith('.webp') && !file.endsWith('.jpg') && !file.endsWith('.png')) continue;
            
            const sourcePath = path.join(dir.source, file);
            const destPath = path.join(dir.dest, file);
            
            // Skip if it's a directory
            if (fs.lstatSync(sourcePath).isDirectory()) continue;

            try {
                // Read and resize
                await sharp(sourcePath)
                    .resize(300) // Resize to 300px width, auto height
                    .webp({ quality: 50, effort: 6 }) // Low quality for thumbnails
                    .toFile(destPath);
                
                const stats = fs.statSync(destPath);
                console.log(`Generated thumbnail for ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }
    
    console.log('Thumbnail generation complete.');
}

generateThumbnails();

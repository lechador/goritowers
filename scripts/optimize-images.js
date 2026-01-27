const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
    path.join(process.cwd(), 'public/apts'),
    path.join(process.cwd(), 'public/apts/new')
];

async function optimizeImages() {
    console.log('Starting image optimization...');
    let totalSaved = 0;
    
    for (const dir of targetDirs) {
        if (!fs.existsSync(dir)) {
            console.log(`Directory not found: ${dir}`);
            continue;
        }

        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            if (!file.endsWith('.webp')) continue;
            
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            const originalSize = stats.size;
            
            try {
                // Read and optimize
                const buffer = await sharp(filePath)
                    .webp({ quality: 75, effort: 6 }) // Adjust quality as needed
                    .toBuffer();
                
                if (buffer.length < originalSize) {
                    fs.writeFileSync(filePath, buffer);
                    const saved = originalSize - buffer.length;
                    totalSaved += saved;
                    console.log(`Optimized ${file}: Saved ${(saved / 1024).toFixed(2)} KB`);
                } else {
                    console.log(`Skipped ${file}: optimization did not reduce size`);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }
    
    console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();

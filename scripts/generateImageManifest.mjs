import fs from 'fs';
import path from 'path';

function generateManifest() {
  const publicImagesDir = path.join(process.cwd(), 'public', 'images', 'sites');
  const localImages = [];

  try {
    if (fs.existsSync(publicImagesDir)) {
      const folders = fs.readdirSync(publicImagesDir).filter(f => {
        const p = path.join(publicImagesDir, f);
        return fs.statSync(p).isDirectory();
      });

      for (const folder of folders) {
        const dirPath = path.join(publicImagesDir, folder);
        const files = fs.readdirSync(dirPath);
        
        for (const file of files) {
          if (file.match(/\.(jpg|jpeg|png|webp|gif|mp4|mov|webm)$/i)) {
            localImages.push({
              _id: `local-${folder}-${file}`,
              title: `${folder} - ${path.basename(file, path.extname(file))}`,
              category: folder,
              image: `/images/sites/${folder}/${file}`
            });
          }
        }
      }
    }

    const outputPath = path.join(process.cwd(), 'src', 'app', '(frontend)', 'gallery', 'localImages.json');
    fs.writeFileSync(outputPath, JSON.stringify(localImages, null, 2));
    console.log(`✅ Generated local images manifest at ${outputPath} with ${localImages.length} items.`);
  } catch (err) {
    console.error("Error generating local images manifest:", err);
    process.exit(1);
  }
}

generateManifest();

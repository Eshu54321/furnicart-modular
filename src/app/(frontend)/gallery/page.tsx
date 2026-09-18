import { client } from "@/sanity/lib/client";
import { ALL_GALLERY_IMAGES_QUERY } from "@/sanity/lib/queries";
import GalleryClient from "./GalleryClient";
import fs from 'fs';
import path from 'path';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata = {
  title: "Gallery | Furnicart Modular",
  description: "Explore our collection of modular office furniture, workstations, partitions, and custom corporate fit-outs.",
};

export default async function GalleryPage() {
  const sanityImages = await client.fetch(ALL_GALLERY_IMAGES_QUERY) || [];

  // Read local site images
  const localImages: any[] = [];
  try {
    const publicImagesDir = path.join(process.cwd(), 'public', 'images', 'sites');
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
              image: `/images/sites/${folder}/${file}` // URL path
            });
          }
        }
      }
    }
  } catch (err) {
    console.error("Error reading local site images", err);
  }

  const allImages = [...localImages, ...sanityImages];

  return <GalleryClient images={allImages} />;
}

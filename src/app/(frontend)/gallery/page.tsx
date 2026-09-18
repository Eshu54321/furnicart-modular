import { client } from "@/sanity/lib/client";
import { ALL_GALLERY_IMAGES_QUERY } from "@/sanity/lib/queries";
import GalleryClient from "./GalleryClient";
import localImages from './localImages.json';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata = {
  title: "Gallery | Furnicart Modular",
  description: "Explore our collection of modular office furniture, workstations, partitions, and custom corporate fit-outs.",
};

export default async function GalleryPage() {
  const sanityImages = await client.fetch(ALL_GALLERY_IMAGES_QUERY) || [];

  const allImages = [...localImages, ...sanityImages];

  return <GalleryClient images={allImages} />;
}

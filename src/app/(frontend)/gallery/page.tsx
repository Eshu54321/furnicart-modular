import { client } from "@/sanity/lib/client";
import { ALL_GALLERY_IMAGES_QUERY } from "@/sanity/lib/queries";
import GalleryClient from "./GalleryClient";

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata = {
  title: "Gallery | Furnicart Modular",
  description: "Explore our collection of modular office furniture, workstations, partitions, and custom corporate fit-outs.",
};

export default async function GalleryPage() {
  const images = await client.fetch(ALL_GALLERY_IMAGES_QUERY);

  return <GalleryClient images={images} />;
}

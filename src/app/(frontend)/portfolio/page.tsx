import React from "react";
import PortfolioClient, { ProjectType } from "./PortfolioClient";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every 60 seconds

// Hardcoded fallback data in case Sanity has no projects yet
const fallbackProjects: ProjectType[] = [
  {
    title: "NCC Executive Suite",
    category: "Executive Cabin",
    image: "/images/Full height partition 80mm thk/DSC06676.JPG",
    location: "NCC Office, BKC, Mumbai",
    scope: "Premium Executive Cabin Setup",
    materials: "100% BWR Marine Plywood, American Walnut Veneer, soft-close credential credenzas",
    executionTime: "25 Days",
    additionalImages: [
      "/images/Full height partition 80mm thk/DSC06676.JPG",
      "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
      "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
      "/images/Storages/DSC00877.JPG",
    ],
  },
  {
    title: "Behr Paints Collaborative Grid",
    category: "Workstation",
    image: "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
    location: "Behr Process Paints, Kalyan West",
    scope: "48 Open-Plan Modular Workstations",
    materials: "Moisture-resistant plywood core, PET acoustic felt dividers, high-pressure HPL desks",
    executionTime: "35 Days",
    additionalImages: [
      "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
      "/images/Full height partition 80mm thk/DSC06676.JPG",
      "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
      "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
    ],
  },
  {
    title: "Oracle Premium Boardroom",
    category: "Conference Room",
    image: "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
    location: "Oracle HQ, Nesco, Goregaon",
    scope: "18-Seater Modular Conference Table",
    materials: "Boiling-water resistant marine ply, matte black HPL, pop-up cable connection boxes",
    executionTime: "20 Days",
    additionalImages: [
      "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
      "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
      "/images/Full height partition 80mm thk/DSC06676.JPG",
      "/images/Storages/DSC00877.JPG",
    ],
  },
  {
    title: "DBS Corporate Partition Grid",
    category: "Office Partition",
    image: "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
    location: "DBS Bank, Thane West",
    scope: "Double-Glazed Full-Height Partition System",
    materials: "Extruded anodized aluminum profiles, 12mm double-glazed tempered glass, sound gaskets",
    executionTime: "30 Days",
    additionalImages: [
      "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
      "/images/Full height partition 80mm thk/DSC06676.JPG",
      "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
      "/images/Storages/DSC00877.JPG",
    ],
  },
  {
    title: "Galaxy Surfactants Director Cabin",
    category: "Executive Cabin",
    image: "/images/Storages/DSC00877.JPG",
    location: "Galaxy Surfactants, Navi Mumbai",
    scope: "Veneer Director Desk & Pedestals",
    materials: "IS:710 Marine Plywood, oak veneers, Hettich telescopic drawer glides",
    executionTime: "22 Days",
    additionalImages: [
      "/images/Storages/DSC00877.JPG",
      "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
      "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
      "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
    ],
  },
  {
    title: "Romell Group Meeting Rooms",
    category: "Conference Room",
    image: "/images/Cabin Furniture/IMG-20190304-WA0017.jpg",
    location: "Romell Group Office, Goregaon East",
    scope: "Modular 10-Seater Meeting Tables",
    materials: "BWP Plywood cores, brushed walnut veneer finish, integrated power popup panels",
    executionTime: "18 Days",
    additionalImages: [
      "/images/Cabin Furniture/IMG-20190304-WA0017.jpg",
      "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
      "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
      "/images/Storages/DSC00877.JPG",
    ],
  },
];

export default async function PortfolioPage() {
  const sanityProjects = await client.fetch(ALL_PROJECTS_QUERY);

  let projects: ProjectType[] = [];

  if (sanityProjects && sanityProjects.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projects = sanityProjects.map((p: any) => ({
      title: p.title,
      category: p.category,
      image: p.coverImage ? urlFor(p.coverImage).width(1200).url() : "",
      location: p.location || "",
      scope: p.scope || "",
      materials: p.materials || "",
      executionTime: p.executionTime || "",
      additionalImages: p.gallery
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? p.gallery.map((img: any) => urlFor(img).width(1200).url())
        : [],
    }));
  } else {
    // Graceful fallback for when the CMS is empty
    projects = fallbackProjects;
  }

  return <PortfolioClient projects={projects} />;
}

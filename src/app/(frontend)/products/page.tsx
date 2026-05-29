import React from "react";
import ProductsClient, { ProductItem } from "./ProductsClient";
import { client } from "@/sanity/lib/client";
import { ALL_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every 60 seconds

// Hardcoded fallback data in case Sanity has no products yet
const fallbackProducts: ProductItem[] = [
  {
    id: "prod-workstations",
    category: "workstations",
    title: "Low-Height Workstations",
    subtitle: "Ergonomic Collaborative Clusters",
    description: "Custom manufactured open-plan desk clusters designed to optimize floor space, facilitate employee focus, and organize heavy cable corridors seamlessly.",
    features: [
      "100% BWR Marine Plywood desktop base with premium HPL finish",
      "Dual-channel powder-coated steel wire raceways underneath",
      "Acoustic PET sound dampening divider divider screens (18mm)",
      "Anti-sag structural steel framework with micro-leveling feet"
    ],
    specifications: [
      { label: "Core Board", value: "Boiling-Water Resistant (BWR) Plywood" },
      { label: "Leg Options", value: "Loop, Triangular, or Square Steel Legs" },
      { label: "Laminate Thickness", value: "1.0mm Heavy-Duty Laminate" },
      { label: "Standard Size", value: "1200mm x 600mm or 1050mm x 600mm" }
    ],
    imageUrl: "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg"
  },
  {
    id: "prod-partitions",
    category: "partitions",
    title: "Modular Full-Height Partitions",
    subtitle: "Acoustical Zone Isolation",
    description: "Heavy-duty modular demountable partition systems offering structural stability and high sound isolation for conference halls and executive cabins.",
    features: [
      "Extra-thick anodized extruded aluminum frames (80mm / 100mm)",
      "Double-glazed tempered glass panels with internal blind controllers",
      "Integrated soundproof gaskets achieving up to 48dB isolation",
      "Interchangeable solid laminate/acoustic fabric panel modules"
    ],
    specifications: [
      { label: "Glass Options", value: "10mm / 12mm Tempered Safety Glass" },
      { label: "Acoustic Rating", value: "STC 42dB to 48dB Sound Shielding" },
      { label: "Core Panel", value: "Gypsum, Glass wool, or Solid Timber" },
      { label: "Relocation Cycle", value: "100% reusable demountable engineering" }
    ],
    imageUrl: "/images/Full height partition 80mm thk/DSC06676.JPG"
  },
  {
    id: "prod-cabin",
    category: "cabin",
    title: "Cabin & Executive Furniture",
    subtitle: "High-End Corporate Identity",
    description: "Prestigious CEO desks, side returns, and matching credenzas built to define the space of forward-thinking corporate leadership teams.",
    features: [
      "Warm natural American Walnut, Oak, or Royal Mahogany veneers",
      "Sleek integrated side drawers and lockable storage cabinets",
      "Premium hand-aligned leather pad desktop inlays",
      "Integrated cable passage caps with under-desk power tracks"
    ],
    specifications: [
      { label: "Top Finish", value: "Premium Veneer with UV Matte Protective Lacquer" },
      { label: "Underframe", value: "Chunky composite support or sleek steel legs" },
      { label: "Storage", value: "Matching side credenza with sliding shutters" },
      { label: "Soft Close", value: "Hafele / Hettich Telescopic Dampers" }
    ],
    imageUrl: "/images/Cabin Furniture/IMG-20191218-WA0021.jpg"
  },
  {
    id: "prod-conference",
    category: "conference",
    title: "Conference & Boardroom Tables",
    subtitle: "Architectural Collaborative Focus",
    description: "Stately boardroom tables designed with integrated wire box trays to maintain clean collaboration lines for high-stakes decision-making.",
    features: [
      "Hidden central aluminum wire flip covers hiding USB/HDMI ports",
      "Thick structural frame beam preventing long-term desktop sagging",
      "Available in modular sections scaling from 6 up to 30 seats",
      "Custom solid wood, veneer, or premium HPL surface styling"
    ],
    specifications: [
      { label: "Board Thickness", value: "36mm or 50mm Heavy Composite Board" },
      { label: "Cable Corridors", value: "Under-table steel mesh basket routing" },
      { label: "Framework", value: "Powder-coated architectural structural steel" },
      { label: "Shapes", value: "Rectangular, Boat-shaped, U-shaped, or Oval" }
    ],
    imageUrl: "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg"
  },
  {
    id: "prod-storage",
    category: "storage",
    title: "Modular Office Storage",
    subtitle: "High-Capacity Storage Systems",
    description: "Butter-smooth filing systems, lateral cupboards, and personal lockers manufactured with tight moisture-sealed edges and central master key locks.",
    features: [
      "Heavy-duty mobile pedestals with anti-tilt fifth wheel safety",
      "Ultra-smooth full extension slide runners with 45kg load rating",
      "Dual-tone premium laminate configurations with custom handles",
      "Automated edgebanding ensuring flawless moisture-resistant seals"
    ],
    specifications: [
      { label: "Running Gear", value: "Hafele central lock & butter telescopic sliders" },
      { label: "Casing Material", value: "18mm premium composite BWR board" },
      { label: "Hinges", value: "110-degree commercial soft-close hinges" },
      { label: "Varieties", value: "Mobile Pedestals, Lateral file shelves, Credenzas" }
    ],
    imageUrl: "/images/Storages/DSC00877.JPG"
  }
];

export default async function ProductsPage() {
  const sanityProducts = await client.fetch(ALL_PRODUCTS_QUERY);

  let products: ProductItem[] = [];

  if (sanityProducts && sanityProducts.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    products = sanityProducts.map((p: any) => ({
      id: p._id,
      category: p.category,
      title: p.name,
      subtitle: p.subtitle || "",
      description: p.shortDescription || "",
      specifications: p.specifications || [],
      features: p.features || [],
      imageUrl: p.mainImage ? urlFor(p.mainImage).width(800).url() : "",
    }));
  } else {
    // Graceful fallback for when the CMS is empty
    products = fallbackProducts;
  }

  return <ProductsClient products={products} />;
}

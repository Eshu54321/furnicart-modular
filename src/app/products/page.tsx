"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { 
  Check, 
  Layers, 
  Monitor, 
  Columns, 
  Briefcase, 
  Tv, 
  FolderArchive, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Hammer,
  FileText
} from "lucide-react";
import Image from "next/image";

interface ProductItem {
  id: string;
  category: "workstations" | "partitions" | "cabin" | "conference" | "storage";
  title: string;
  subtitle: string;
  description: string;
  specifications: { label: string; value: string }[];
  features: string[];
  imageUrl: string;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products", icon: Layers },
    { id: "workstations", name: "Workstations", icon: Monitor },
    { id: "partitions", name: "Partitions", icon: Columns },
    { id: "cabin", name: "Cabin Furniture", icon: Briefcase },
    { id: "conference", name: "Conference", icon: Tv },
    { id: "storage", name: "Storage Systems", icon: FolderArchive },
  ];

  const productsData: ProductItem[] = [
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
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
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
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
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
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
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
      imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=800"
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
      imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : productsData.filter(prod => prod.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* Page Hero */}
        <section className="bg-section-alt py-20 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container className="text-center relative z-10">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block animate-fade-in">
              Product Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
              B2B Modular Systems
            </h1>
            <p className="mt-4 text-sm md:text-base text-secondary-light max-w-2xl mx-auto leading-relaxed font-sans">
              Precision manufactured workspace items direct from our Wada & Vapi plants. Engineered with BWR Plywood, steel supports, and Hafele hardware.
            </p>
          </Container>
        </section>

        {/* Filter Navigation */}
        <section className="py-8 bg-white border-b border-border sticky top-[72px] z-30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-[12px] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                      isActive 
                        ? "bg-primary border-primary text-white shadow-md scale-102"
                        : "bg-page-bg border-border text-secondary hover:bg-white hover:border-primary/50"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-accent" : "text-secondary-light"}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Product Catalog Grid */}
        <section className="py-20">
          <Container>
            <div className="space-y-24">
              {filteredProducts.map((product, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={product.id}
                    className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 bg-white p-8 lg:p-12 rounded-[24px] border border-border shadow-warm-soft hover:shadow-warm-hover transition-all duration-300 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Left/Right Product Image */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border shadow-inner">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 bg-primary/95 text-white backdrop-blur-sm border border-accent/20 px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                        <span className="font-sans text-[10px] font-bold uppercase tracking-widest">10-Year Warranty</span>
                      </div>
                    </div>

                    {/* Product Specifications & Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className="block font-sans text-xs font-bold uppercase tracking-wider text-accent mb-2">
                          {product.subtitle}
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
                          {product.title}
                        </h2>
                        <p className="text-sm font-sans text-secondary-light leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-page-bg p-5 rounded-[16px] border border-border/80">
                          {product.specifications.map((spec) => (
                            <div key={spec.label} className="flex flex-col">
                              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light/80 mb-0.5">
                                {spec.label}
                              </span>
                              <span className="text-xs font-sans font-medium text-secondary">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Core Features */}
                        <div className="space-y-3 mb-8">
                          {product.features.map((feat) => (
                            <div key={feat} className="flex items-start text-xs font-sans text-secondary">
                              <span className="w-4 h-4 rounded-full bg-accent-light-bg text-accent flex items-center justify-center mr-2.5 shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Inquiry Actions */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/60">
                        <Button
                          href={`https://wa.me/919867032565?text=Hello%20Furnicart%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20${encodeURIComponent(product.title)}%20for%20our%20office.`}
                          target="_blank"
                          variant="secondary"
                          className="flex items-center space-x-2 border-border/80 text-secondary hover:border-primary hover:text-primary transition-colors text-xs font-bold py-3"
                        >
                          <Zap className="w-3.5 h-3.5 text-accent" />
                          <span>WhatsApp Quote</span>
                        </Button>
                        <Button
                          href="/contact"
                          variant="primary"
                          className="text-xs font-bold py-3 px-6 flex items-center space-x-2"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Request Spec Sheet</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Quality Banner */}
        <section className="bg-secondary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container className="max-w-4xl text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Twin Production Plants in Wada & Vapi
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-2xl mx-auto font-sans">
              Our computerized CNC machining centers and direct automated hot-melt edgebanders ensure every desk, cupboard, and panel leaves with millimeter-perfect margins.
            </p>
            <div className="flex justify-center space-x-4">
              <Button href="/about" variant="secondary" className="border-white text-white hover:bg-white/10 text-xs">
                About Our Process
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

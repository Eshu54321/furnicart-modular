"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Check, Compass, Sparkles, Hammer, Truck, Info, Palette } from "lucide-react";
import Image from "next/image";

interface SwatchOption {
  name: string;
  color: string;
  previewUrl?: string; // Optional custom texture preview or visual color
}

interface MaterialSwatch {
  title: string;
  description: string;
  swatches: SwatchOption[];
}

export default function Services() {
  // Swatch interaction state mapping
  const [selectedSwatches, setSelectedSwatches] = useState<{ [key: string]: number }>({
    "Powder-Coated Aluminum": 0,
    "Acoustic Felt Screens": 0,
    "Premium Wood Veneer": 0,
    "High-Pressure Laminate": 0,
    "Frosted & Tinted Glass": 0,
    "Commercial Hardware": 0,
  });

  const materialSwatches: MaterialSwatch[] = [
    {
      title: "Powder-Coated Aluminum",
      description: "Extruded aluminum framing profiles for full-height partitions and workstation legs. Power-coated to strictly resist scratches, impact, and corrosion.",
      swatches: [
        { name: "Silver Anodized", color: "#C0C0C0" },
        { name: "Matte Charcoal", color: "#2E2E2E" },
        { name: "Glossy White", color: "#F3F2ED" },
        { name: "Champagne Bronze", color: "#8A7D71" },
      ],
    },
    {
      title: "Acoustic Felt Screens",
      description: "High-density PET acoustic felt partition dividers. Absorbs conversational noise, creating clean sound sanctuaries between low-height workstations.",
      swatches: [
        { name: "Charcoal Grey", color: "#3B3F46" },
        { name: "Sage Green", color: "#7C9E7C" },
        { name: "Soft Beige", color: "#EADCC9" },
        { name: "Deep Cobalt", color: "#1D2A44" },
      ],
    },
    {
      title: "Premium Wood Veneer",
      description: "Natural decorative wood veneer sheets finished with premium UV matte lacquers. Crafted specifically for boardroom tables and executive cabin desks.",
      swatches: [
        { name: "American Walnut", color: "#4E3629" },
        { name: "Warm Oak", color: "#C8A27B" },
        { name: "Royal Mahogany", color: "#3D1E1E" },
        { name: "Ash Grey", color: "#9E9E9E" },
      ],
    },
    {
      title: "High-Pressure Laminate",
      description: "Heavy-duty commercial HPL sheets pressed onto boiling-water resistant plywood. Perfect for high-frequency daily employee desk usage.",
      swatches: [
        { name: "Pristine White", color: "#FFFFFF" },
        { name: "Sandy Maple", color: "#F0E4D2" },
        { name: "Graphite Matte", color: "#1A1A1A" },
        { name: "Natural Pine", color: "#D1C3B1" },
      ],
    },
    {
      title: "Frosted & Tinted Glass",
      description: "Translucent double-glazed tempered safety glass partition panels. Isolates spaces while maintaining a beautiful light-filled office ambiance.",
      swatches: [
        { name: "Clear Reeded", color: "#F8FAFC" },
        { name: "Frosted Acid", color: "#E2E8F0" },
        { name: "Bronze Tint", color: "#8A7D71" },
        { name: "Smoke Grey", color: "#2F2F2F" },
      ],
    },
    {
      title: "Commercial Hardware",
      description: "Standard industrial drawer runners, soft-close dampers, wire grommets, and lock systems rated for heavy office use cycles.",
      swatches: [
        { name: "Satin Chrome", color: "#E5E5E5" },
        { name: "Brass Accent", color: "#C5A059" },
        { name: "Brushed Nickel", color: "#A3A3A3" },
        { name: "Matte Black", color: "#2E2E2E" },
      ],
    },
  ];

  const mainServices = [
    {
      title: "Low Height Workstations",
      tagline: "Engineered Collaborative Spaces",
      description:
        "Ergonomically designed open-plan workstation units featuring partition divider panels, built-in wire-management raceways, and custom steel underframe structures. Custom manufactured to optimize space and efficiency.",
      features: [
        "Separate data & power wire routing channels built underneath",
        "Acoustic felt dividers in various custom color themes",
        "100% BWR Marine Plywood desktop base finished with durable HPL",
        "Anti-sag structural steel supports with micro-leveling feet",
      ],
      img: "/images/Desking workstations/Fuji Electric-Sharing workstation.jpg",
    },
    {
      title: "Modular Full Height Partitions",
      tagline: "Acoustic Room Isolation",
      description:
        "Industrial partition walls engineered to isolate conference rooms, cabins, and zones. Features solid timber, gypsum frame core panels, or elegant double-glazed glass dividers.",
      features: [
        "Tested acoustical sound dampening matching office standards",
        "Frosted, tinted, or completely transparent glass configurations",
        "Integrated vertical wire corridor layouts feeding into drop ceilings",
        "Modular construction allowing simple relocation and restructuring",
      ],
      img: "/images/Full height partition 80mm thk/DSC06676.JPG",
    },
    {
      title: "Cabin & Executive Furniture",
      tagline: "Bespoke Professional Identity",
      description:
        "High-end premium wood veneer executive desks and side returns crafted to deliver executive elegance. Fully customizable with drawer configurations, matching back paneling, and filing credenzas.",
      features: [
        "Natural walnut, oak, or mahogany veneers with UV protective coatings",
        "Integrated side drawers, lockable cabinets, & hidden digital vault",
        "Beautiful leather desktop inlay options & integrated cable caps",
        "Matching storage wall modules to anchor the cabin's aesthetic",
      ],
      img: "/images/Cabin Furniture/IMG-20191218-WA0021.jpg",
    },
    {
      title: "Conference Tables",
      tagline: "Boardrooms Designed for Decisions",
      description:
        "Minimalist, modern boardroom conference tables supporting up to 30 seats. Features hidden centralized wire boxes, robust steel support skeleton frames, and clean, expansive veneer or laminate tops.",
      features: [
        "Centralized metal wire covers with custom HDMI, USB, and power sockets",
        "100% boiling-water resistant plywood cores preventing desktop warping",
        "Sleek metal support legs powder-coated to match office palettes",
        "Available in multiple modular configurations scaling from 6 to 30 seats",
      ],
      img: "/images/Conference-Meeting table/Fuji Electric-Meeting table.jpg",
    },
    {
      title: "Modular Office Storage",
      tagline: "Clean, High-Capacity Systems",
      description:
        "Heavy-duty mobile pedestals, low side credenzas, sliding-door lockers, and full-height file cupboards. Constructed to standard commercial specs with zero panel chipping.",
      features: [
        "Central master-key locking systems securing valuable documents",
        "Butter-smooth telescopic ball-bearing sliders from Hettich & Hafele",
        "Automated edgebanding ensuring flawless moisture seals",
        "Anti-topple safety configurations for drawer pedestals",
      ],
      img: "/images/Storages/DSC00877.JPG",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Floor Mapping",
      description: "Laser scans of structural columns, heights, window points, and wire floor box metrics.",
      icon: Compass,
    },
    {
      step: "02",
      title: "CAD & 3D Drafting",
      description: "Detailed 2D CAD space layouts and 3D visual workstations mockups mapping swatches.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Plant Fabrication",
      description: "Heavy-duty CNC cutting, drilling, and edgebanding inside our Wada and Vapi factories.",
      icon: Hammer,
    },
    {
      step: "04",
      title: "Off-Hours Setup",
      description: "Rapid commercial installation scheduled during nights or weekends to protect your business focus.",
      icon: Truck,
    },
  ];

  const handleSwatchChange = (materialTitle: string, index: number) => {
    setSelectedSwatches((prev) => ({
      ...prev,
      [materialTitle]: index,
    }));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* Banner with Warm, Clean Typography */}
        <section className="bg-section-alt py-20 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container className="text-center relative z-10">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block animate-fade-in">
              Our Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight animate-fade-in">
              Corporate Modular Workspaces
            </h1>
            <p className="mt-4 text-sm md:text-base text-secondary-light max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in">
              From open-plan collaborative workstations to high-performance acoustical glass partitions, discover how Furnicart brings Wada & Vapi direct modular engineering to businesses.
            </p>
          </Container>
        </section>

        {/* 5 Alternating Services Details Segment */}
        <section className="py-24">
          <Container>
            <div className="space-y-28">
              {mainServices.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.title}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Cover Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative group overflow-hidden rounded-[16px] border border-border shadow-warm-soft aspect-[4/3]">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Text Details with gold checkmarks */}
                    <div className="w-full lg:w-1/2">
                      <span className="block font-sans text-xs font-bold uppercase tracking-wider text-accent mb-2">
                        {service.tagline}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-secondary-light text-sm md:text-base leading-relaxed mb-8 font-sans">
                        {service.description}
                      </p>

                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start text-secondary text-sm font-sans">
                            <span className="w-5 h-5 rounded-full bg-accent-light-bg text-accent flex items-center justify-center mr-3 shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button href="/contact" variant="primary">
                        Plan My Workspace
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Premium Materials & Color Swatches Grid */}
        <section className="bg-section-alt py-24 border-t border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                Exquisite Materials
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                Our Interactive Swatches
              </h2>
              <p className="mt-3 text-sm text-secondary-light font-sans">
                Click the color buttons on each panel below to see a live visual swatch preview of our standard modular finishes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {materialSwatches.map((material) => {
                const activeIndex = selectedSwatches[material.title];
                const activeSwatch = material.swatches[activeIndex];

                return (
                  <div
                    key={material.title}
                    className="bg-white p-8 rounded-[16px] border border-border shadow-warm-soft flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <div>
                      {/* Active color display card */}
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-serif font-bold text-secondary">
                          {material.title}
                        </h3>
                        <div className="flex items-center space-x-2 bg-accent-light-bg px-3 py-1 rounded-full text-accent">
                          <Palette className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Swatches</span>
                        </div>
                      </div>

                      <p className="text-xs text-secondary-light leading-relaxed mb-6 font-sans">
                        {material.description}
                      </p>
                    </div>

                    {/* Interactive color picker */}
                    <div className="border-t border-border/60 pt-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light">
                          Active Shading:
                        </span>
                        <span className="text-xs font-sans font-bold text-secondary">
                          {activeSwatch.name}
                        </span>
                      </div>

                      {/* Swatches buttons row */}
                      <div className="flex items-center space-x-3">
                        {material.swatches.map((swatch, idx) => (
                          <button
                            key={swatch.name}
                            onClick={() => handleSwatchChange(material.title, idx)}
                            title={swatch.name}
                            style={{ backgroundColor: swatch.color }}
                            className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                              activeIndex === idx
                                ? "border-primary scale-[1.15] shadow-md ring-2 ring-primary/20"
                                : "border-border hover:scale-105"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Seamless Process Map */}
        <section className="py-24">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                How We Deliver
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                A Worry-Free Project Journey
              </h2>
              <p className="mt-3 text-sm text-secondary-light font-sans">
                Skip the coordination headache of traditional local carpenters. Furnicart manages everything from preliminary design to post-setup cleanup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-white p-8 rounded-[16px] border border-border shadow-warm-soft flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-serif text-3xl font-bold text-primary/25">
                          {step.step}
                        </span>
                        <div className="p-3 rounded-[12px] bg-accent-light-bg text-accent">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-serif font-bold text-secondary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs text-secondary-light leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Localized Thane-Kalyan Warranty Strip */}
        <section className="bg-secondary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container className="max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-accent mb-6 border border-white/10">
              <Info className="w-4 h-4" />
              <span className="text-xs font-sans font-bold uppercase tracking-widest">Our Quality Standard</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our B2B Quality & Delivery Pledge
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto font-sans">
              Every modular workstation, partition, and storage unit crafted at our factories is built from **100% BWR Marine Plywood** with powder-coated aluminum extrusions. We back our engineering with a **10-Year Commercial Warranty** and scheduled off-hours installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://wa.me/919867032565" target="_blank" variant="secondary" className="border-white text-white hover:bg-white/10">
                WhatsApp Our Designer
              </Button>
              <Button href="/contact" variant="primary">
                Book Consultation
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

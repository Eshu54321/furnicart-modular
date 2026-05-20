"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ShieldCheck, Flame, Compass, ChevronRight, ChevronLeft, Layers, Hammer, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as const;

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
      tagline: "Collaborative Workstations",
      title: "Architectural Precision.",
      subtitle: "Modular Workstation Systems.",
      description: "Ergonomically designed low-height collaborative workstations and desk layouts built directly at our Wada & Vapi plants.",
      ctaText: "Request Commercial Quote",
      ctaLink: "/contact",
      specs: [
        { label: "Board Thickness", value: "18mm & 25mm Pre-lam" },
        { label: "Hardware Support", value: "Hettich Soft-Close" },
        { label: "Tolerances", value: "CNC Wood Cutting" },
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920",
      tagline: "Modular Partitions",
      title: "Acoustic Partition Walls.",
      subtitle: "Full-Height Privacy Panels.",
      description: "Premium sound-rated double-glazed glass dividers and modular walls engineered for cabins, boardrooms, and corridors.",
      ctaText: "Explore Services",
      ctaLink: "/services",
      specs: [
        { label: "Sound Isolation", value: "Up to 45dB STC" },
        { label: "Glass Options", value: "Double-Glazed / Frosted" },
        { label: "Structure Frame", value: "Anodized Aluminum" },
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1920",
      tagline: "Executive Desks",
      title: "Executive Director Cabin.",
      subtitle: "UV-Lacquered Real Veneers.",
      description: "Bespoke executive cabin furniture, walnut veneer meeting tables, and storage credenzas made to project configurations.",
      ctaText: "View Products",
      ctaLink: "/products",
      specs: [
        { label: "Veneer Types", value: "American Walnut & Oak" },
        { label: "Top Protection", value: "UV Matte Lacquered" },
        { label: "Storage Locks", value: "Centralized Security" },
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920",
      tagline: "Conference Solutions",
      title: "Flexible Boardrooms.",
      subtitle: "Cable Corridors Built-In.",
      description: "High-end boardroom conference tables scaling from 6 to 30 seats, featuring built-in vertical wire management ducts.",
      ctaText: "Book Design Consultation",
      ctaLink: "/contact",
      specs: [
        { label: "Power Docks", value: "HDMI, USB & AC Sockets" },
        { label: "Base Core", value: "100% BWR Marine Plywood" },
        { label: "Support Legs", value: "Heavy-Duty Powder Coated" },
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1920",
      tagline: "Modular Office Storage",
      title: "High-Capacity Storage.",
      subtitle: "Seamless Organization.",
      description: "Heavy-duty mobile drawer units, filing cabinets, and sliding lockers engineered for intensive corporate use.",
      ctaText: "View Storage Options",
      ctaLink: "/products",
      specs: [
        { label: "Runners / Slides", value: "Hafele Telescopic" },
        { label: "Pedestal Safety", value: "Anti-Topple Locking" },
        { label: "Edge Banding", value: "Automated Zero-Chipping" },
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* Full-Screen Hero Carousel (inspired by natrajfurniture.com) */}
        <section className="relative lg:h-[calc(100vh-72px)] min-h-[calc(100vh-72px)] lg:min-h-0 flex items-center bg-black overflow-hidden border-b border-border">
          {/* Background Images Cross-Fade */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                className="absolute inset-0 z-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].tagline}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
            {/* Premium Gradient Overlay Masks for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 md:to-transparent z-10" />
            <div className="absolute inset-0 bg-black/30 z-10" />
            
            {/* Subtle Drafting Engineering Grid on top of the slide */}
            <div className="absolute inset-0 z-10 opacity-15 pointer-events-none engineering-grid" />
          </div>

          {/* Luxury Linear Accent Lines (representing architectural drafting layout) */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

          {/* Interactive Slide Overlay Content */}
          <Container className="relative z-20 w-full h-full flex flex-col justify-center py-10 lg:py-16">
            <div className="max-w-4xl text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-4 lg:space-y-5"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-accent/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-accent/35 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-accent-light">
                      {slides[currentSlide].tagline}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-bold text-white leading-[1.1] tracking-tight">
                    {slides[currentSlide].title} <br />
                    <span className="text-accent italic font-serif">{slides[currentSlide].subtitle}</span>
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl font-sans">
                    {slides[currentSlide].description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-1">
                    <Button href={slides[currentSlide].ctaLink} variant="primary" size="lg" className="shadow-lg shadow-accent/20 hover:shadow-accent/45 transition-all duration-300">
                      {slides[currentSlide].ctaText}
                    </Button>
                    <Button href="/portfolio" variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300">
                      View Corporate Projects
                    </Button>
                  </div>

                  {/* 3-Badge Spec Dock */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/20 max-w-3xl">
                    {slides[currentSlide].specs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-serif text-sm sm:text-base font-bold text-white mb-0.5">{spec.value}</span>
                        <span className="font-sans text-xs text-white/50">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>

          {/* Left Arrow Controls (hidden on mobile, touch swipes/indicator dots instead) */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 text-white hover:scale-105 transition-all cursor-pointer hidden md:flex items-center justify-center focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Controls */}
          <button
            onClick={handleNextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 text-white hover:scale-105 transition-all cursor-pointer hidden md:flex items-center justify-center focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators / Progress dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                  currentSlide === idx 
                    ? "bg-accent scale-110 w-8" 
                    : "bg-white/30 hover:bg-white/60 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Proof Strip */}
        <section className="bg-section-alt border-b border-border/80 py-6 overflow-hidden">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 w-full">
            {/* Reviews Proof */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-sans text-xs md:text-sm font-bold text-secondary tracking-wide">
                4.9/5 Google Rating <span className="text-secondary-light font-normal">(180+ Local Corporate Offices)</span>
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] h-6 bg-border" />

            {/* Landmarks Proof */}
            <div className="flex items-center space-x-2 text-center md:text-left">
              <span className="font-sans text-xs md:text-sm text-secondary-light">
                Serving Corporate Clients in:{" "}
                <span className="font-bold text-secondary">Kalyan • Thane • Mumbai BKC • Wada • Vapi</span>
              </span>
            </div>
          </Container>
        </section>

        {/* Trusted By Client Logos with Infinite Marquee */}
        <section className="bg-white py-12 border-b border-border/60 relative overflow-hidden">
          {/* Mask Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <Container className="text-center relative">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-secondary-light/70 block mb-8">
              PARTNERING WITH PRESTIGIOUS ENTERPRISES
            </span>
            <div className="w-full overflow-hidden py-2">
              <div className="animate-marquee-left flex items-center gap-16 md:gap-24 opacity-80">
                {/* 1st list */}
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">NCC Limited</span>
                <span className="font-sans text-sm md:text-base font-extrabold text-secondary/60 tracking-tight whitespace-nowrap">ROMELL GROUP</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">ORACLE</span>
                <span className="font-serif text-sm md:text-base font-semibold text-secondary/60 italic whitespace-nowrap">DBS BANK</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-tight whitespace-nowrap">GALAXY SURFACTANTS</span>
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 whitespace-nowrap">BEHR PAINTS</span>

                {/* 2nd list for seamless looping */}
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">NCC Limited</span>
                <span className="font-sans text-sm md:text-base font-extrabold text-secondary/60 tracking-tight whitespace-nowrap">ROMELL GROUP</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">ORACLE</span>
                <span className="font-serif text-sm md:text-base font-semibold text-secondary/60 italic whitespace-nowrap">DBS BANK</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-tight whitespace-nowrap">GALAXY SURFACTANTS</span>
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 whitespace-nowrap">BEHR PAINTS</span>

                {/* 3rd list for seamless looping on ultrawide */}
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">NCC Limited</span>
                <span className="font-sans text-sm md:text-base font-extrabold text-secondary/60 tracking-tight whitespace-nowrap">ROMELL GROUP</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">ORACLE</span>
                <span className="font-serif text-sm md:text-base font-semibold text-secondary/60 italic whitespace-nowrap">DBS BANK</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-tight whitespace-nowrap">GALAXY SURFACTANTS</span>
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 whitespace-nowrap">BEHR PAINTS</span>

                {/* 4th list for seamless looping on giant screens */}
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">NCC Limited</span>
                <span className="font-sans text-sm md:text-base font-extrabold text-secondary/60 tracking-tight whitespace-nowrap">ROMELL GROUP</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-wider whitespace-nowrap">ORACLE</span>
                <span className="font-serif text-sm md:text-base font-semibold text-secondary/60 italic whitespace-nowrap">DBS BANK</span>
                <span className="font-sans text-sm md:text-base font-bold text-secondary/60 tracking-tight whitespace-nowrap">GALAXY SURFACTANTS</span>
                <span className="font-serif text-sm md:text-base font-bold text-secondary/60 whitespace-nowrap">BEHR PAINTS</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Teaser */}
        <section className="py-24 md:py-32 bg-white">
          <Container>
            <SectionHeading
              title="Corporate Modular Furniture"
              subtitle="Tailored partition systems, workstations, and high-durability executive cabin setups optimized for workspace efficiency."
              tag="Products"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <ServiceCard
                  title="Low Height Workstations"
                  description="Ergonomically engineered workstations featuring built-in wire-management raceways, premium acoustical privacy partitions, and steel structure frames."
                  iconName="Building2"
                  imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                  href="/products"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ServiceCard
                  title="Modular Full Height Partitions"
                  description="Premium aluminum frame layout partitions in customized frosted glass, acoustic laminate wood, or gypsum panels designed to isolate clean offices."
                  iconName="Layers"
                  imageUrl="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
                  href="/products"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ServiceCard
                  title="Cabin & Executive Furniture"
                  description="Bespoke luxury executive desks, walnut veneer tables, comfortable ergonomic chairs, and integrated storage side units for board directors."
                  iconName="DoorClosed"
                  imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
                  href="/products"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ServiceCard
                  title="Conference Tables"
                  description="Modern boardrooms and conference tables featuring hidden cable popups, integrated connectivity panels, and high-pressure wooden laminate cores."
                  iconName="Tv"
                  imageUrl="https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600"
                  href="/products"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ServiceCard
                  title="Modular Office Storage"
                  description="High-capacity filing cupboards, sliding credenzas, individual employee drawer pedestals, and lockers finished with premium edgebanding."
                  iconName="ShieldCheck"
                  imageUrl="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600"
                  href="/products"
                />
              </motion.div>
            </motion.div>

            <div className="text-center mt-16">
              <Button href="/services" variant="secondary" size="lg">
                View Material Swatches & Specs
              </Button>
            </div>
          </Container>
        </section>

        {/* 4-Step Process Section */}
        <section className="bg-sage text-white py-24 md:py-32 relative overflow-hidden">
          {/* Grain mask */}
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />

          <Container>
            <div className="max-w-3xl mb-16 text-left">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#EEF4EE] mb-3 block">
                Workflow
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Our Millimeter-Perfect Process
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#EEF4EE]/80 leading-relaxed font-sans">
                From structural lasers to automated factory edgebanding, we bring industrial precision to commercial workspace execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {/* Process Step 1 */}
              <div className="relative group bg-white/5 border border-white/10 rounded-[12px] p-8 hover:bg-white/10 transition-colors duration-300">
                <span className="font-serif text-[44px] font-bold text-accent/30 group-hover:text-accent/60 transition-colors leading-none block mb-4">
                  01
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Layout Consultation
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Laser mappings of columns, height clearance, wire floor boxes, and electric routes to maximize your floor-plate efficiency.
                </p>
              </div>

              {/* Process Step 2 */}
              <div className="relative group bg-white/5 border border-white/10 rounded-[12px] p-8 hover:bg-white/10 transition-colors duration-300">
                <span className="font-serif text-[44px] font-bold text-accent/30 group-hover:text-accent/60 transition-colors leading-none block mb-4">
                  02
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  3D Office Renders
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Comprehensive 2D workstation floor plans and 3D visual mockups mapping your selected fabric partition swatches and table sizes.
                </p>
              </div>

              {/* Process Step 3 */}
              <div className="relative group bg-white/5 border border-white/10 rounded-[12px] p-8 hover:bg-white/10 transition-colors duration-300">
                <span className="font-serif text-[44px] font-bold text-accent/30 group-hover:text-accent/60 transition-colors leading-none block mb-4">
                  03
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Plant Fabrication
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  CNC machining and heavy-duty automatic edgebanding performed inside our Wada (Thane) and Vapi plants to ensure zero-tolerance gaps.
                </p>
              </div>

              {/* Process Step 4 */}
              <div className="relative group bg-white/5 border border-white/10 rounded-[12px] p-8 hover:bg-white/10 transition-colors duration-300">
                <span className="font-serif text-[44px] font-bold text-accent/30 group-hover:text-accent/60 transition-colors leading-none block mb-4">
                  04
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Off-Hours Assembly
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Fast, dust-free modular assembly at your facility scheduled over weekends or nights to completely avoid client operational downtime.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Portfolio Teaser */}
        <section className="py-24 md:py-32 bg-page-bg">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading
                title="Delivered Workspaces"
                subtitle="Explore our recently constructed premium commercial layouts engineered for high durability and ergonomics."
                tag="Portfolio"
                align="left"
              />
              <div className="shrink-0 mb-4 md:mb-16">
                <Button href="/portfolio" variant="primary" size="md">
                  View Project Gallery
                </Button>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="NCC Executive Open-Plan Workspaces"
                  category="Low Height Workstations"
                  image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  location="Kalyan, Thane"
                  scope="Modular Desks & Wire Channels"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="Oracle Premium Boardroom Suite"
                  category="Conference Tables"
                  image="https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=800"
                  location="Thane West IT Hub"
                  scope="Walnut Boardroom Table"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="DBS Bank Partitioning Grid"
                  category="Full Height Partition"
                  image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                  location="BKC, Mumbai"
                  scope="Glass & Gypsum Partitions"
                />
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 md:py-32 bg-section-alt border-y border-border/80">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left 6 Columns Text */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  Material Standards
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-secondary leading-tight">
                  Commercial Durability. Zero Compromise.
                </h2>
                <p className="mt-4 text-sm md:text-base text-secondary-light leading-relaxed font-sans">
                  Commercial spaces face continuous usage cycles. Our panels, framework, and glass installations are engineered to survive daily industrial wear while retaining beautiful visual calmness.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-secondary text-sm">heavy-duty Hardware</h4>
                    <p className="text-xs text-secondary-light mt-0.5">Hettich & Hafele commercial fittings certified for high-frequency workplace opening cycles.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-secondary text-sm">Industrial Grade Plywood</h4>
                    <p className="text-xs text-secondary-light mt-0.5">BWP Marine Grade and high-density fiber core backing strictly prevents sagging or expanding.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-secondary text-sm">Laser Precise Mating</h4>
                    <p className="text-xs text-secondary-light mt-0.5">Automated German plant cuts guarantee uniform joints and clean alignment for double glazed glass.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-secondary text-sm">Industrial Swatch Specs</h4>
                    <p className="text-xs text-secondary-light mt-0.5">Powder-coated framing swatches, frosted acoustics screens, and scratch-resistant matte veneers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Columns Bevel Image Card */}
            <div className="lg:col-span-6 relative w-full h-[400px] md:h-[480px] rounded-[16px] overflow-hidden border border-border shadow-warm-soft">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
                alt="Precision modular office furniture manufacturing details"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 bg-white">
          <Container>
            <SectionHeading
              title="Verified Corporate Feedback"
              subtitle="Nothing speaks louder than commercial projects executed cleanly. Read what local project managers say."
              tag="Testimonials"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Furnicart Modular successfully delivered 120 low-height workstations and full-height partitions for our Thane IT park. Butter-smooth modular execution, robust aluminum columns, and zero delays."
                author="Romell Group Procurement"
                location="Kapurbawdi, Thane"
                projectType="120-Seat Office Workstations"
              />
              <TestimonialCard
                quote="Their custom-glazed modular acoustic partition screens solved our boardroom noise isolation problem. Outstanding wood finishing and clean assembly done entirely over one weekend."
                author="DBS Bank Operations Manager"
                location="BKC, Mumbai"
                projectType="Acoustic Office Partitions"
              />
              <TestimonialCard
                quote="Reliable contract modular manufacturer. Their Wada and Vapi plants delivered high-pressure laminate boardroom conference tables and customized file cupboards right on target."
                author="NCC Project Lead (Infrastructure)"
                location="Khadakpada, Kalyan"
                projectType="Executive Cabins & Storages"
              />
            </div>
          </Container>
        </section>

        {/* Oak-Styled Contact Banner */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden border-t-8 border-primary">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none wood-grain" />

          <Container className="relative z-10 max-w-4xl flex flex-col items-center text-center space-y-8">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent">
              Inquiry Desk
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Ready to Optimize Your Corporate Floor Plan?
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed font-sans mx-auto">
              Get an accurate commercial budget estimation, custom CAD layouts, and material swatches. Reach out to Swarup Bole directly or book an on-site workspace consultation in Kalyan, Thane, or BKC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full pt-4">
              <Button href="/contact" variant="primary" size="lg" className="bg-accent text-white hover:bg-accent-hover rounded-[8px]">
                Request Project Call
              </Button>
              <a
                href="tel:+919867032565"
                className="inline-flex items-center justify-center font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-[8px] bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                Call: +91 98670 32565
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Layers, Settings, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";

interface ProjectType {
  title: string;
  category: string;
  image: string;
  location: string;
  scope: string;
  materials: string;
  executionTime: string;
  additionalImages: string[];
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ["All", "Workstation", "Office Partition", "Executive Cabin", "Conference Room"];

  const projects: ProjectType[] = [
    {
      title: "NCC Executive Suite",
      category: "Executive Cabin",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
      location: "NCC Office, BKC, Mumbai",
      scope: "Premium Executive Cabin Setup",
      materials: "100% BWR Marine Plywood, American Walnut Veneer, soft-close credential credenzas",
      executionTime: "25 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "Behr Paints Collaborative Grid",
      category: "Workstation",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      location: "Behr Process Paints, Kalyan West",
      scope: "48 Open-Plan Modular Workstations",
      materials: "Moisture-resistant plywood core, PET acoustic felt dividers, high-pressure HPL desks",
      executionTime: "35 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "Oracle Premium Boardroom",
      category: "Conference Room",
      image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=1200",
      location: "Oracle HQ, Nesco, Goregaon",
      scope: "18-Seater Modular Conference Table",
      materials: "Boiling-water resistant marine ply, matte black HPL, pop-up cable connection boxes",
      executionTime: "20 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "DBS Corporate Partition Grid",
      category: "Office Partition",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      location: "DBS Bank, Thane West",
      scope: "Double-Glazed Full-Height Partition System",
      materials: "Extruded anodized aluminum profiles, 12mm double-glazed tempered glass, sound gaskets",
      executionTime: "30 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "Galaxy Surfactants Director Cabin",
      category: "Executive Cabin",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
      location: "Galaxy Surfactants, Navi Mumbai",
      scope: "Veneer Director Desk & Pedestals",
      materials: "IS:710 Marine Plywood, oak veneers, Hettich telescopic drawer glides",
      executionTime: "22 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "Romell Group Meeting Rooms",
      category: "Conference Room",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
      location: "Romell Group Office, Goregaon East",
      scope: "Modular 10-Seater Meeting Tables",
      materials: "BWP Plywood cores, brushed walnut veneer finish, integrated power popup panels",
      executionTime: "18 Days",
      additionalImages: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* 320px tall Page Hero */}
        <section className="bg-section-alt py-16 h-[320px] flex items-center border-b border-border relative overflow-hidden">
          {/* Wood grain overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />

          <Container className="text-center relative z-10 flex flex-col justify-center h-full">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block animate-fade-in">
              Our Projects
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary leading-tight animate-fade-in">
              Corporate Modular Spaces
            </h1>
            <p className="mt-3 text-sm md:text-base text-secondary-light max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in">
              Browse our high-capacity office workstations, partition walls, and boardrooms delivered for prestigious Indian corporate clients.
            </p>
          </Container>
        </section>

        {/* Filter & Grid Section */}
        <section className="py-20 relative">
          <Container>
            {/* Sticky filter pills */}
            <div className="sticky top-[72px] bg-page-bg/85 backdrop-blur-md z-30 py-4 flex flex-wrap justify-center gap-3 mb-12 border-b border-border/40">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-white shadow-warm-soft"
                      : "bg-white text-secondary border border-border hover:bg-accent-light-bg"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      location={project.location}
                      scope={project.executionTime}
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveImageIndex(0);
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </Container>
        </section>
      </main>

      {/* Full-Screen Interactive Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-[20px] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-secondary hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center shadow-md z-30 focus:outline-none border border-border cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 lg:p-10">
                {/* Left Side: Images */}
                <div className="lg:col-span-7 flex flex-col space-y-4">
                  {/* Large Main Image */}
                  <div className="relative w-full h-[320px] md:h-[400px] rounded-[12px] overflow-hidden bg-border border border-border">
                    <Image
                      src={selectedProject.additionalImages[activeImageIndex]}
                      alt={selectedProject.title}
                      fill
                      className="object-cover transition-all duration-300"
                    />
                  </div>

                  {/* 4 Preview Thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                    {selectedProject.additionalImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-[4/3] rounded-[8px] overflow-hidden border-2 transition-all ${
                          activeImageIndex === idx ? "border-primary scale-[1.03] shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt="Thumbnail preview"
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side: Spec sheet details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4 leading-tight">
                      {selectedProject.title}
                    </h2>

                    {/* Spec Sheet Table */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start space-x-3 border-b border-border/60 pb-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-secondary-light font-medium block">Location</span>
                          <span className="font-sans text-sm font-bold text-secondary">{selectedProject.location}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 border-b border-border/60 pb-3">
                        <Layers className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-secondary-light font-medium block">Scope</span>
                          <span className="font-sans text-sm font-bold text-secondary">{selectedProject.scope}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 border-b border-border/60 pb-3">
                        <Settings className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-secondary-light font-medium block">Materials Used</span>
                          <span className="font-sans text-sm font-bold text-secondary">{selectedProject.materials}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 pb-2">
                        <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-secondary-light font-medium block">Execution Time</span>
                          <span className="font-sans text-sm font-bold text-secondary">{selectedProject.executionTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Button href="/contact" variant="primary" size="lg" className="w-full">
                      Get Similar Design Estimate
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}

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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectType {
  title: string;
  category: string;
  image: string;
  location: string;
  scope: string;
  materials: string;
  executionTime: string;
  additionalImages: string[];
}

interface PortfolioClientProps {
  projects: ProjectType[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ["All", "Workstation", "Office Partition", "Executive Cabin", "Conference Room"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const projectElements = containerRef.current.children;
        const ctx = gsap.context(() => {
          gsap.fromTo(
            projectElements,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
              },
            }
          );
        }, containerRef);
        return () => ctx.revert();
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [filter, filteredProjects.length]);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        <section className="bg-section-alt py-16 h-[320px] flex items-center border-b border-border relative overflow-hidden">
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

        <section className="py-20 relative">
          <Container>
            <div className="sticky top-[72px] bg-page-bg/85 backdrop-blur-md z-30 py-4 flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 mb-12 border-b border-border/40 hide-scrollbar px-4 md:px-0 snap-x snap-mandatory">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`shrink-0 snap-start px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-white shadow-warm-soft"
                      : "bg-white text-secondary border border-border hover:bg-accent-light-bg"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div
              layout
              ref={containerRef}
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
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-secondary hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center shadow-md z-30 focus:outline-none border border-border cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 lg:p-10">
                <div className="lg:col-span-7 flex flex-col space-y-4">
                  <div className="relative w-full h-[320px] md:h-[400px] rounded-[12px] overflow-hidden bg-border border border-border">
                    {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                      <Image
                        src={selectedProject.additionalImages[activeImageIndex] || selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-all duration-300"
                      />
                    )}
                  </div>

                  {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
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
                            sizes="(max-width: 768px) 33vw, 25vw"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4 leading-tight">
                      {selectedProject.title}
                    </h2>

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

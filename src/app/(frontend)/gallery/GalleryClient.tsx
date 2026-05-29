"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

interface GalleryImage {
  _id: string;
  title?: string;
  category?: string;
  image: any;
}

interface GalleryClientProps {
  images: GalleryImage[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Extract unique categories for filtering
  const allCategories = ["All", ...Array.from(new Set(images.map((img) => img.category).filter(Boolean)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-[72px] min-h-screen bg-page-bg">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
              Our Visual Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Project Gallery
            </h1>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
              Explore our comprehensive gallery of modular workstations, executive cabins, and bespoke corporate furniture.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Category Filter */}
          {allCategories.length > 1 && (
            <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-3 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {allCategories.map((category) => (
                <button
                  key={category as string}
                  onClick={() => setActiveCategory(category as string)}
                  className={`snap-start shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white text-secondary hover:bg-gray-100 border border-border"
                  }`}
                >
                  {category as string}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          {filteredImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 6) * 0.1, duration: 0.5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 break-inside-avoid"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={urlFor(img.image).url()}
                    alt={img.title || "Gallery image"}
                    width={800}
                    height={800}
                    unoptimized
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                    <ZoomIn className="w-8 h-8 mb-3 opacity-80" />
                    {img.title && <h3 className="font-serif font-bold text-lg mb-1">{img.title}</h3>}
                    {img.category && <span className="font-sans text-xs uppercase tracking-wider text-white/80">{img.category}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-secondary/60">
              <p>No images found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={urlFor(selectedImage.image).url()}
                  alt={selectedImage.title || "Gallery image"}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {(selectedImage.title || selectedImage.category) && (
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
                  {selectedImage.title && <h3 className="text-white font-serif text-2xl font-bold">{selectedImage.title}</h3>}
                  {selectedImage.category && <p className="text-white/70 font-sans text-sm mt-1">{selectedImage.category}</p>}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    <Footer />
    <WhatsAppWidget />
    </>
  );
}

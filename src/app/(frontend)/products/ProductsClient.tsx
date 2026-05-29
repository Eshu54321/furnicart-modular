"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { 
  Check, Layers, Monitor, Columns, Briefcase, 
  Tv, FolderArchive, ShieldCheck, Zap, FileText
} from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ProductItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  specifications: { label: string; value: string }[];
  features: string[];
  imageUrl: string;
}

interface ProductsClientProps {
  products: ProductItem[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products", icon: Layers },
    { id: "workstations", name: "Workstations", icon: Monitor },
    { id: "partitions", name: "Partitions", icon: Columns },
    { id: "cabin", name: "Cabin Furniture", icon: Briefcase },
    { id: "conference", name: "Conference", icon: Tv },
    { id: "storage", name: "Storage Systems", icon: FolderArchive },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(prod => prod.category === activeCategory);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Small delay to ensure DOM is updated before triggering animations
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const productElements = containerRef.current.children;
        const ctx = gsap.context(() => {
          gsap.fromTo(
            productElements,
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
  }, [activeCategory, filteredProducts.length]);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
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

        <section className="py-8 bg-white border-b border-border sticky top-[72px] z-30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <Container>
            <div className="flex overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-2 md:gap-3 pb-4 md:pb-0 hide-scrollbar w-full snap-x snap-mandatory pt-2 px-1 md:px-0">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 snap-start inline-flex items-center space-x-2 px-5 py-2.5 rounded-[12px] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
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

        <section className="py-20">
          <Container>
            <div className="space-y-24" ref={containerRef}>
              {filteredProducts.map((product, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={product.id}
                    className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 bg-white p-8 lg:p-12 rounded-[24px] border border-border shadow-warm-soft hover:shadow-warm-hover transition-all duration-300 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border shadow-inner bg-page-bg">
                      {product.imageUrl && (
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 bg-primary/95 text-white backdrop-blur-sm border border-accent/20 px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                        <span className="font-sans text-[10px] font-bold uppercase tracking-widest">10-Year Warranty</span>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                      <div>
                        {product.subtitle && (
                          <span className="block font-sans text-xs font-bold uppercase tracking-wider text-accent mb-2">
                            {product.subtitle}
                          </span>
                        )}
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
                          {product.title}
                        </h2>
                        <p className="text-sm font-sans text-secondary-light leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {product.specifications?.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-page-bg p-5 rounded-[16px] border border-border/80">
                            {product.specifications.map((spec, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light/80 mb-0.5">
                                  {spec.label}
                                </span>
                                <span className="text-xs font-sans font-medium text-secondary">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {product.features?.length > 0 && (
                          <div className="space-y-3 mb-8">
                            {product.features.map((feat, i) => (
                              <div key={i} className="flex items-start text-xs font-sans text-secondary">
                                <span className="w-4 h-4 rounded-full bg-accent-light-bg text-accent flex items-center justify-center mr-2.5 shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/60 mt-auto">
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

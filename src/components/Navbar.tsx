"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 h-[72px] flex items-center bg-white border-b border-border ${
          isScrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.08)]" : "shadow-none"
        }`}
      >
        <Container className="flex items-center justify-between w-full">
          {/* Logo Left */}
          <Link href="/" className="flex items-center select-none py-1">
            <Image
              src="/logo 1.png"
              alt="Furnicart Modular"
              width={124}
              height={30}
              priority
              style={{ height: "auto" }}
              className="h-[30px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-all duration-300 relative py-1 hover:text-primary ${
                    isActive ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.name}
                  {/* Sliding gold underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA (Right) */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Open navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </header>

      {/* Mobile Drawer (Full-Screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center lg:hidden"
          >
            {/* Close Button Top-Right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-accent hover:text-accent-hover transition-colors focus:outline-none cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Stacked Links Center-Aligned */}
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-serif text-3xl font-bold tracking-tight hover:text-primary transition-colors py-2 block relative ${
                        isActive ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-accent rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                className="pt-8 flex flex-col items-center space-y-4 w-full"
              >
                <Button href="/contact" variant="primary" size="lg" onClick={() => setIsOpen(false)}>
                  Get Free Quote
                </Button>
                <a
                  href="tel:+919867032565"
                  className="text-primary hover:text-primary-dark font-sans font-semibold uppercase tracking-widest text-sm"
                >
                  Call: +91 98670 32565
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

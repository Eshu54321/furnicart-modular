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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary-dark text-white z-[100] lg:hidden flex flex-col h-full w-full overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between w-full h-[72px] px-6 border-b border-white/5 shrink-0 bg-primary-dark">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center py-1">
                <Image
                  src="/logo 1.png"
                  alt="Furnicart Modular"
                  width={124}
                  height={30}
                  priority
                  style={{ height: "auto" }}
                  className="h-[30px] w-auto object-contain brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-12 w-full max-w-lg mx-auto">
              <nav className="flex flex-col space-y-5 my-auto py-6">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent mb-2 block opacity-85">
                  Corporate Workspace Menu
                </span>
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.1, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-3.5 border-b border-white/5"
                      >
                        <div className="flex items-baseline">
                          <span className="text-accent font-sans text-xs font-bold tracking-widest mr-4 opacity-70">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-serif text-2xl font-bold tracking-wide transition-colors ${
                              isActive ? "text-white" : "text-white/60 group-hover:text-white"
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>
                        <span
                          className={`w-2 h-2 rounded-full bg-accent transition-transform duration-300 ${
                            isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.15, duration: 0.3 }}
                className="pt-8 border-t border-white/5 space-y-6"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center text-center bg-accent hover:bg-accent-hover text-white shadow-[0_4px_20px_rgba(227,27,35,0.15)] text-[13px] border-none py-4"
                >
                  Get Free Quote
                </Button>
                
                <div className="flex flex-col space-y-2.5 text-center font-sans">
                  <a
                    href="tel:+919867032565"
                    className="text-white/70 hover:text-white transition-colors text-sm font-semibold"
                  >
                    Call: +91 98670 32565
                  </a>
                  <a
                    href="mailto:contact@furnicart.in"
                    className="text-white/50 hover:text-white transition-colors text-xs"
                  >
                    Email: contact@furnicart.in
                  </a>
                  <p className="text-white/30 text-[10px] pt-1 uppercase tracking-wider">
                    Wada & Vapi Automated Production Plants
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

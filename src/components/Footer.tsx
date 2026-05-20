import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Low-Height Workstations", href: "/products" },
    { name: "Modular Full-Height Partitions", href: "/products" },
    { name: "Cabin & Executive Desks", href: "/products" },
    { name: "Conference Room Tables", href: "/products" },
    { name: "Modular Storage Systems", href: "/products" },
    { name: "Acoustic Wall Panels", href: "/products" },
  ];

  return (
    <footer className="bg-secondary text-white/80 pt-20 pb-10 border-t border-border/10 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 select-none">
              <Image
                src="/logo 2.png"
                alt="Furnicart Modular Emblem"
                width={36}
                height={36}
                style={{ height: "auto" }}
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                  FURNICART
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase font-semibold text-accent -mt-0.5 pl-0.5">
                  MODULAR
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-sans">
              "Manufacturing premium modular workspace installations since 2014."
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[8px] border border-white/20 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[8px] border border-white/20 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[8px] border border-white/20 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* Google */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[8px] border border-white/20 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Google Reviews"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm1 14.93a1 1 0 1 1-2 0V13H8.5a1 1 0 1 1 0-2H11V8.5a1 1 0 1 1 2 0V11h2.5a1 1 0 1 1 0 2H13z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6 md:pl-8">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Modular Systems
            </h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed font-sans">
                  Kalyan (W), Thane – 421 301
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919867032565"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-300 font-sans"
                >
                  +91 98670 32565
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:swarupbole@gmail.com"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-300 font-sans"
                >
                  swarupbole@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-white/60 font-sans">
                  Mon–Sat: 10AM – 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Thin Gold Divider line */}
        <div className="w-full h-[1px] bg-accent/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/40 space-y-4 md:space-y-0 font-sans">
          <p>Copyright © 2026 Furnicart Modular Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Shield, Eye, Lock, Globe, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 20, 2026";

  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content:
        "We collect personal and corporate details necessary to process commercial project consultations and orders. This includes: client name, company name, corporate email address, contact number, shipping/site address, billing details, and any architectural layouts or furniture drawings you provide for customized modular layouts.",
    },
    {
      icon: Lock,
      title: "2. How We Use Your Information",
      content:
        "Your data is used solely to prepare B2B modular estimates, execute custom office furniture manufacturing at our Wada and Vapi plants, dispatch logistics teams, coordinate site installations, and communicate updates on your orders. We do not sell, rent, or trade your information with external marketing companies.",
    },
    {
      icon: Globe,
      title: "3. Wada & Vapi Plant Coordination",
      content:
        "During execution, order details (including floor plans and dimensional specifications) are securely transmitted between our head office and our automated manufacturing facilities in Wada (Thane) and Vapi (Gujarat) to ensure exact precision during wood cutting, edgebanding, and quality control phases.",
    },
    {
      icon: Shield,
      title: "4. Information Security",
      content:
        "We implement industry-standard physical and digital controls to safeguard your engineering drawings, site plans, and billing documents. Internal access to B2B project folders is restricted to authorized site engineers, designers, and project managers.",
    },
    {
      icon: FileText,
      title: "5. Cookies & Site Analytics",
      content:
        "Our website uses essential session cookies to analyze website traffic, remember contact form entries, and optimize layout responsiveness. No third-party behavioral advertising cookies are placed on our website.",
    },
    {
      icon: CheckCircle2,
      title: "6. Your Rights & Contacts",
      content:
        "You have the right to request access to the personal data we hold, correct any inaccuracies, or request complete deletion of your records from our databases. For any privacy queries, email us directly at contact@furnicart.in or call our head office.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* Page Hero Header */}
        <section className="bg-section-alt py-16 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container>
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                LEGAL & COMPLIANCE
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-secondary/60 font-sans">
                Last updated and effective as of: <strong className="text-secondary">{lastUpdated}</strong>
              </p>
            </div>
          </Container>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Introduction Column */}
              <div className="lg:col-span-4">
                <div className="sticky top-[100px] bg-page-bg rounded-[16px] border border-border p-8">
                  <h3 className="font-serif font-bold text-xl text-secondary mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-sm text-secondary/70 font-sans leading-relaxed mb-6">
                    Furnicart Modular Private Limited respects your privacy and is committed to protecting your personal data in accordance with Indian information security guidelines.
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-primary font-sans font-semibold">
                    <Shield className="w-5 h-5" />
                    <span>ISO 9001:2015 Standards</span>
                  </div>
                </div>
              </div>

              {/* Policy Body Column */}
              <div className="lg:col-span-8 space-y-12">
                <div>
                  <p className="text-base text-secondary/80 font-sans leading-relaxed mb-6">
                    This Privacy Policy explains how Furnicart Modular Private Limited collect, process, and protect your information when you use our website or engage with our commercial estimation and design consultation services.
                  </p>
                </div>

                <div className="space-y-10">
                  {sections.map((section, idx) => {
                    const Icon = section.icon;
                    return (
                      <div key={idx} className="flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-[12px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-lg text-secondary mb-3">
                            {section.title}
                          </h4>
                          <p className="text-sm text-secondary/70 font-sans leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

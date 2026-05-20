"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Scale, Hammer, HardHat, FileCheck, CircleDollarSign, AlertTriangle } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "May 20, 2026";

  const sections = [
    {
      icon: FileCheck,
      title: "1. Scope & Custom Drawings Sign-off",
      content:
        "All modular furniture, workstations, and full-height partitions are manufactured to bespoke site layouts. Work begins only after the client approves and signs off the engineering drawings, AutoCAD drafts, and color selections. Any change request after drawing sign-off may incur revisions in prices and delivery schedules.",
    },
    {
      icon: Hammer,
      title: "2. Production & Manufacturing Timelines",
      content:
        "Standard manufacturing lead times are calculated from the receipt of the signed drawings and advance payment. Production takes place at our Wada (Thane) or Vapi (Gujarat) plants. Standard delivery ranges from 15 to 30 business days depending on B2B volume, custom finishes, or special partition options.",
    },
    {
      icon: HardHat,
      title: "3. Site Readiness & Installation",
      content:
        "The client is responsible for preparing the site (ensuring floor leveling, civil clearances, core-drilled wiring paths, and power availability) before our installation engineers arrive. If the site is not ready at the scheduled installation window, additional logistics or storage charges may apply.",
    },
    {
      icon: CircleDollarSign,
      title: "4. Payments & Commercial Terms",
      content:
        "Unless agreed otherwise in writing, commercial transactions follow our B2B milestone framework: 50% advance payment to initiate material sourcing and wood cutting, 40% on delivery of raw materials to the site, and the remaining 10% on completion of installation.",
    },
    {
      icon: Scale,
      title: "5. Warranty & Component Specs",
      content:
        "Furnicart Modular offers a 5-year structural warranty covering manufacturing defects in our 18mm & 25mm pre-laminated boards, frame structures, and panels. Hardware components (such as Hettich soft-close hinges, Hafele slides, and locks) carry direct warranties from their respective manufacturers.",
    },
    {
      icon: AlertTriangle,
      title: "6. Jurisdiction & Dispute Resolution",
      content:
        "Any dispute arising out of commercial contracts, supply delays, or site configurations shall be governed in accordance with Indian business laws. Parties agree to submit to the exclusive jurisdiction of the courts located in Kalyan/Thane, Maharashtra.",
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
                BUSINESS COMPLIANCE
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight mb-4">
                Terms & Conditions
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
                    B2B Client Agreement
                  </h3>
                  <p className="text-sm text-secondary/70 font-sans leading-relaxed mb-6">
                    These terms set forth the commercial protocols, manufacturing lead times, and warranty boundaries for all modular furniture deliveries from our Wada & Vapi plants.
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-primary font-sans font-semibold">
                    <Scale className="w-5 h-5" />
                    <span>Legally Enforceable Commercial Terms</span>
                  </div>
                </div>
              </div>

              {/* Terms Body Column */}
              <div className="lg:col-span-8 space-y-12">
                <div>
                  <p className="text-base text-secondary/80 font-sans leading-relaxed mb-6">
                    By confirming your quotation, signing construction layouts, or requesting B2B modular supply, you agree to comply with the standard Terms and Conditions outlined below.
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

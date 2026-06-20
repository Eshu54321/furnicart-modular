"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Phone, Mail, MapPin, CheckCircle, MessageSquare, ChevronDown, Building2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    locality: "",
    budget: "₹5 Lakhs - ₹15 Lakhs",
    projectType: "Low-Height Workstations",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number so our modular space planning team can reach you.");
      return;
    }
    setSubmitted(true);
  };

  const contactCards = [
    {
      title: "Direct B2B Hotline",
      value: "+91 98670 32565",
      subText: "Mon - Sun: 9:00 AM to 8:00 PM",
      href: "tel:+919867032565",
      icon: Phone,
    },
    {
      title: "Corporate Email",
      value: "swarupbole@gmail.com",
      subText: "Direct attention from Swarup Bole",
      href: "mailto:swarupbole@gmail.com",
      icon: Mail,
    },
    {
      title: "Registered Studio",
      value: "Atgaon, Taluka - Shahapur",
      subText: "District - Thane, Maharashtra",
      href: "#",
      icon: MapPin,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        {/* Contact Page Hero */}
        <section className="bg-section-alt py-20 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container className="text-center relative z-10">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block animate-fade-in">
              WORK WITH FURNICART MODULAR
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight animate-fade-in">
              Request a Workspace Proposal
            </h1>
            <p className="mt-4 text-sm md:text-base text-secondary-light max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in">
              Partner with Wada & Vapi manufacturing strength. Coordinate a complimentary site measurement and modular workstation layout blueprint.
            </p>
          </Container>
        </section>

        {/* Contact Cards & Form Segment */}
        <section className="py-20 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column: B2B Contact Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-secondary mb-4 leading-tight">
                    Scale Your Workspace Efficiently
                  </h2>
                  <p className="text-secondary-light text-sm leading-relaxed mb-6 font-sans">
                    Whether you are establishing a new IT hub, arranging low-height desk clusters, or partitioning manager cabins, our industrial facilities provide direct-from-factory pricing with absolute on-time delivery.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactCards.map((card, idx) => {
                    const Icon = card.icon;
                    const CardWrapper = card.href !== "#" ? "a" : "div";
                    return (
                      <CardWrapper
                        key={idx}
                        href={card.href !== "#" ? card.href : undefined}
                        className={`flex items-start gap-4 p-5 rounded-[16px] bg-white border-l-4 border-l-primary border-t border-r border-b border-border shadow-warm-soft hover:shadow-md transition-all group ${
                          card.href !== "#" ? "cursor-pointer" : ""
                        }`}
                      >
                        <div className="p-3 bg-accent-light-bg text-accent rounded-[12px] group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-primary">{card.title}</p>
                          <p className="text-sm font-bold text-secondary mt-1 leading-snug">{card.value}</p>
                          <p className="text-[11px] text-secondary-light mt-0.5 font-sans">{card.subText}</p>
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>

                {/* Instant WhatsApp Consult Button */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/919867032565"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-[8px] transition-colors shadow-warm-soft"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    Instant WhatsApp Consult
                  </a>
                </div>
              </div>

              {/* Right Column: B2B Consultation Form */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-border p-8 md:p-10 rounded-[16px] shadow-warm-lg">
                  {submitted ? (
                    <div className="text-center py-16 space-y-6">
                      <div className="inline-flex items-center justify-center p-4 bg-green-50 text-green-600 rounded-full mb-4">
                        <CheckCircle className="w-12 h-12 stroke-[1.5]" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-secondary">
                        Proposal Request Logged!
                      </h3>
                      <p className="text-secondary-light text-sm leading-relaxed max-w-md mx-auto font-sans">
                        Your commercial modular layout request has been recorded. Swarup Bole or our chief workplace strategist will contact you within 12 hours with structural details and layout guidance.
                      </p>
                      <div className="pt-6">
                        <Button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: "",
                              phone: "",
                              email: "",
                              locality: "",
                              budget: "₹5 Lakhs - ₹15 Lakhs",
                              projectType: "Low-Height Workstations",
                              message: "",
                            });
                          }}
                          variant="secondary"
                        >
                          Send Another Proposal Request
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-secondary mb-1">Book an On-Site Corporate Consult</h3>
                        <p className="text-xs text-secondary-light font-sans">Submit your workspace layouts or layout targets for detailed factory pricing.</p>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="relative pt-2">
                          <input
                            type="text"
                            id="name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                            className="peer w-full px-4 py-3.5 bg-white border border-border rounded-[8px] text-sm text-secondary placeholder-transparent focus:outline-none focus:border-primary transition-all pt-5"
                            placeholder="Name"
                          />
                          <label
                            htmlFor="name"
                            className={`absolute left-4 transition-all pointer-events-none text-secondary-light font-sans text-xs
                              ${focusedField === "name" || formData.name !== "" ? "top-1 text-[10px] font-bold text-primary" : "top-7 -translate-y-1/2 text-sm"}`}
                          >
                            Your Name / Company Contact *
                          </label>
                        </div>

                        {/* Phone Input */}
                        <div className="relative pt-2">
                          <input
                            type="tel"
                            id="phone"
                            required
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            value={formData.phone}
                            className="peer w-full px-4 py-3.5 bg-white border border-border rounded-[8px] text-sm text-secondary placeholder-transparent focus:outline-none focus:border-primary transition-all pt-5"
                            placeholder="Phone"
                          />
                          <label
                            htmlFor="phone"
                            className={`absolute left-4 transition-all pointer-events-none text-secondary-light font-sans text-xs
                              ${focusedField === "phone" || formData.phone !== "" ? "top-1 text-[10px] font-bold text-primary" : "top-7 -translate-y-1/2 text-sm"}`}
                          >
                            Direct Phone Number *
                          </label>
                        </div>
                      </div>

                      {/* Email & Corporate Locality */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Input */}
                        <div className="relative pt-2">
                          <input
                            type="email"
                            id="email"
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email}
                            className="peer w-full px-4 py-3.5 bg-white border border-border rounded-[8px] text-sm text-secondary placeholder-transparent focus:outline-none focus:border-primary transition-all pt-5"
                            placeholder="Email"
                          />
                          <label
                            htmlFor="email"
                            className={`absolute left-4 transition-all pointer-events-none text-secondary-light font-sans text-xs
                              ${focusedField === "email" || formData.email !== "" ? "top-1 text-[10px] font-bold text-primary" : "top-7 -translate-y-1/2 text-sm"}`}
                          >
                            Corporate Email Address (Optional)
                          </label>
                        </div>

                        {/* Locality Input */}
                        <div className="relative pt-2">
                          <input
                            type="text"
                            id="locality"
                            onFocus={() => setFocusedField("locality")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                            value={formData.locality}
                            className="peer w-full px-4 py-3.5 bg-white border border-border rounded-[8px] text-sm text-secondary placeholder-transparent focus:outline-none focus:border-primary transition-all pt-5"
                            placeholder="Locality"
                          />
                          <label
                            htmlFor="locality"
                            className={`absolute left-4 transition-all pointer-events-none text-secondary-light font-sans text-xs
                              ${focusedField === "locality" || formData.locality !== "" ? "top-1 text-[10px] font-bold text-primary" : "top-7 -translate-y-1/2 text-sm"}`}
                          >
                            Project Location (e.g. Wagle Estate, Thane)
                          </label>
                        </div>
                      </div>

                      {/* Project Type & Budget Dropdowns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project Type */}
                        <div>
                          <label htmlFor="projectType" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light mb-2">
                            Modular System Needed
                          </label>
                          <div className="relative">
                            <select
                              id="projectType"
                              value={formData.projectType}
                              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-border rounded-[8px] text-sm text-secondary focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                            >
                              <option value="Low-Height Workstations">Low-Height Workstations</option>
                              <option value="Modular Full-Height Partitions">Modular Full-Height Partitions</option>
                              <option value="Cabin & Executive Office Cabins">Cabin & Executive Office Cabins</option>
                              <option value="Conference Room Tables">Conference Room Tables</option>
                              <option value="Modular Storage & Filing Systems">Modular Storage & Filing Systems</option>
                              <option value="Complete Commercial Office Turnkey">Complete Commercial Office Turnkey</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-light pointer-events-none" />
                          </div>
                        </div>

                        {/* Budget Dropdown */}
                        <div>
                          <label htmlFor="budget" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light mb-2">
                            Estimated B2B Budget
                          </label>
                          <div className="relative">
                            <select
                              id="budget"
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-border rounded-[8px] text-sm text-secondary focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                            >
                              <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                              <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                              <option value="₹15 Lakhs - ₹35 Lakhs">₹15 Lakhs - ₹35 Lakhs</option>
                              <option value="₹35 Lakhs - ₹75 Lakhs">₹35 Lakhs - ₹75 Lakhs</option>
                              <option value="₹75 Lakhs+">₹75 Lakhs+</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-light pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Message / Details */}
                      <div>
                        <label htmlFor="message" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-light mb-2">
                          Message / Seating Capacity / Specific Materials
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="e.g. Setting up a new 60-seater office floor at Rambaug. We require separate powder-coated cable paths, frosted glass partitions, and a 12-seater conference table..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-border rounded-[8px] text-sm text-secondary placeholder-secondary-light/50 focus:outline-none focus:border-primary transition-all resize-none"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full py-4 bg-primary hover:bg-[#6b4220] text-white font-sans text-xs font-bold uppercase tracking-widest rounded-[8px] transition-colors shadow-warm-soft cursor-pointer"
                        >
                          Request Modular Space Proposal
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 400px Tall Responsive Google Maps Iframe */}
        <section className="h-[400px] w-full border-t border-border relative overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Atgaon,%20Taluka%20-%20Shahapur%20,%20District%20-%20Thane&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-90 contrast-[1.05]"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}


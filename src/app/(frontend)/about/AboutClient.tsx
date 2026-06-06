"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Check, Shield, Trophy, Award, Users, ChevronLeft, ChevronRight, Zap, Target, Star, Building2, Factory, Briefcase } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  colorClass: string;
}

interface AboutClientProps {
  team: TeamMember[];
}

export default function AboutClient({ team }: AboutClientProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "20+ Yrs", label: "Manufacturing Depth" },
    { value: "2 Plants", label: "Wada (Thane) & Vapi (Gujarat)" },
    { value: "15,000+", label: "Workstations Installed" },
    { value: "50+", label: "MNC & Corporate Clients" },
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2004",
      title: "The Workshop Genesis",
      description: "Began modular cabinetry operations, pioneering high-durability wood machining and customized office desk systems in Kalyan.",
    },
    {
      year: "2014",
      title: "Incorporation & Wada Plant",
      description: "Incorporated as Furnicart Modular Private Limited in January 2014, establishing our primary high-capacity factory in Wada, Thane.",
    },
    {
      year: "2017",
      title: "Vapi Factory Commissioned",
      description: "Launched a state-of-the-art secondary facility in Vapi, Gujarat, scaling advanced automatic edgebanding and steel fabrication.",
    },
    {
      year: "2020",
      title: "Enterprise Partnerships",
      description: "Became preferred workspace modular supplier toRomell Group, DBS Bank, and Nagarjuna Construction Company (NCC).",
    },
    {
      year: "2025",
      title: "B2B Production Scale",
      description: "Expanded Wada and Vapi plants to run concurrent automated assembly lines, meeting high-volume MNC partition schedules.",
    },
  ];

  const premiumValues = [
    {
      title: "Industrial Caliber",
      description: "Equipped with automatic hot-melt edgebanding and high-volume press systems to achieve 0.1mm micro-seams on all desks and panels.",
      icon: Award,
    },
    {
      title: "B2B Scalability",
      description: "Dual-facility framework in Wada (Thane) and Vapi (Gujarat) running concurrent production shifts to guarantee project delivery.",
      icon: Factory,
    },
    {
      title: "Compliance & Safety",
      description: "Certified materials: BWR Marine Plywood, powder-coated structural aluminum, fire-retardant fabrics, and standard GST contracts.",
      icon: Shield,
    },
  ];

  const corporateClients = [
    { name: "Nagarjuna Construction Company (NCC)", desc: "Commercial office infrastructure layouts" },
    { name: "Romell Group", desc: "Corporate headquarters and executive desk setups" },
    { name: "Oracle Corporation", desc: "Collaborative tech workstations and privacy partitions" },
    { name: "Pioneer Hi-Bred Pvt. Ltd", desc: "Commercial research spaces and partition walls" },
    { name: "DBS Bank", desc: "Secure financial workstations & glazed partition cubicles" },
    { name: "Behr Process Paints", desc: "Aesthetic collaborative spaces & manager desks" },
    { name: "Galaxy Surfactants Ltd", desc: "Executive cabins and custom modular storage panels" }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const commitmentsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
        );
      }

      // Stats section
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.9, y: 30 },
          { 
            opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" }
          }
        );
      }

      // Engine section
      if (engineRef.current) {
        gsap.fromTo(
          engineRef.current.children,
          { opacity: 0, x: -40 },
          { 
            opacity: 1, x: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: engineRef.current, start: "top 80%" }
          }
        );
      }

      // Clients section
      if (clientsRef.current) {
        gsap.fromTo(
          clientsRef.current.children,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: clientsRef.current, start: "top 85%" }
          }
        );
      }

      // Commitments section
      if (commitmentsRef.current) {
        gsap.fromTo(
          commitmentsRef.current.children,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: commitmentsRef.current, start: "top 85%" }
          }
        );
      }

      // Team section
      if (teamRef.current) {
        gsap.fromTo(
          teamRef.current.children,
          { opacity: 0, scale: 0.95, y: 40 },
          { 
            opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: teamRef.current, start: "top 85%" }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-page-bg">
        <section className="bg-section-alt py-20 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" ref={heroRef}>
              <div className="lg:col-span-7">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  CORPORATE HERITAGE
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight mb-6">
                  High-Capacity Modular Office Solutions Since 2014
                </h1>
                <p className="text-secondary-light text-sm md:text-base leading-relaxed mb-6 font-sans">
                  Incorporated in <strong>January 2014</strong>, <strong>Furnicart Modular Private Limited</strong> brings over <strong>20 years of manufacturing depth</strong> to the corporate and commercial landscape of India.
                </p>
                <p className="text-secondary-light text-sm md:text-base leading-relaxed mb-8 font-sans">
                  From our high-capacity modular plants in <strong>Wada, Thane (Maharashtra)</strong> and <strong>Vapi (Gujarat)</strong>, we build high-precision systems: Low-Height Workstations with acoustic screens, Modular Full-Height Partitions, Executive Office Cabins, Conference Tables, and space-saving Commercial Storage. We are the trusted manufacturing partner for top-tier Indian businesses and multinational corporations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/portfolio" variant="primary">
                    View B2B Projects
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Consult Our Planner
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="rounded-[16px] overflow-hidden border border-border shadow-warm-lg aspect-[4/3] relative">
                  <Image
                    src="/images/Workstations and cubicles with 4ft partitions/DSC08409.JPG"
                    alt="Furnicart High Capacity Manufacturing Plant"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover animate-pulse-slow"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-[16px] border border-border/20 shadow-warm-lg hidden md:block">
                  <p className="font-serif text-3xl font-bold text-accent">20+</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/80 font-sans">Years Industry Depth</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-page-bg">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" ref={statsRef}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-[16px] border border-border/80 bg-white shadow-warm-soft">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-secondary-light font-bold font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white border-t border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={engineRef}>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  MANUFACTURING ENGINE
                </span>
                <h2 className="text-3xl font-serif font-bold text-secondary mb-6">
                  Advanced Dual-Facility Infrastructure
                </h2>
                <p className="text-secondary-light text-sm leading-relaxed mb-6 font-sans">
                  Unlike traditional interior contractors who construct products on-site using manual techniques, Furnicart Modular fabricates components under strict clean-room conditions in our twin industrial facilities.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-accent-light-bg text-accent rounded-lg">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary text-sm">Wada Facility (Thane, Maharashtra)</h4>
                      <p className="text-xs text-secondary-light font-sans mt-1">
                        Equipped with CNC routers and high-speed cold-press laminators. Tailored for prompt distribution across Kalyan, Thane, Mumbai, and neighboring hubs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-accent-light-bg text-accent rounded-lg">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary text-sm">Vapi Facility (Gujarat Industrial Hub)</h4>
                      <p className="text-xs text-secondary-light font-sans mt-1">
                        Houses heavy steel fabrication frames, automated powder-coating units, and long-bed partition panel extrusion tracks for high-volume B2B orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[12px] overflow-hidden border border-border aspect-square relative">
                  <Image
                    src="/images/Workstations and cubicles with 4ft partitions/IMG-20190516-WA0025.jpg"
                    alt="Automatic Edgebander Calibration"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[12px] overflow-hidden border border-border aspect-square relative mt-8">
                  <Image
                    src="/images/Workstations and cubicles with 4ft partitions/DSC06657.JPG"
                    alt="Workstation Partition Assembly"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-24 bg-section-alt border-b border-border">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                TRUSTED BY LEADING ENTERPRISES
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                Our Corporate Client Roster
              </h2>
              <p className="text-secondary-light text-xs md:text-sm font-sans mt-3">
                Collaborating with premium infrastructure builders, financial entities, and tech firms across Maharashtra and Gujarat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={clientsRef}>
              {corporateClients.map((client, index) => (
                <div
                  key={client.name}
                  className="bg-white p-6 rounded-[16px] border border-border shadow-warm-soft hover:shadow-warm-md transition-shadow flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-light-bg text-accent flex items-center justify-center font-bold text-xs shrink-0 font-serif">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary text-sm leading-snug">{client.name}</h3>
                    <p className="text-[11px] text-secondary-light font-sans mt-1.5 leading-normal">{client.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-24 bg-page-bg relative overflow-hidden">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  CORPORATE EVOLUTION
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                  Our Growth Milestones
                </h2>
              </div>
              <div className="flex items-center space-x-3 mt-6 md:mt-0">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-secondary hover:text-primary hover:bg-accent-light-bg transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-secondary hover:text-primary hover:bg-accent-light-bg transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {timelineEvents.map((event) => (
                <div
                  key={event.year}
                  className="min-w-[280px] md:min-w-[340px] bg-white p-8 rounded-[16px] border border-border/80 shadow-warm-soft snap-start flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-serif font-bold text-accent/30 block mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-base font-serif font-bold text-secondary mb-3">
                      {event.title}
                    </h3>
                    <p className="text-xs md:text-sm text-secondary-light leading-relaxed font-sans">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-24 bg-section-alt border-t border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none wood-grain" />
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                DEEP COMMITMENT
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                Our Core B2B Commitments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={commitmentsRef}>
              {premiumValues.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white p-8 rounded-[16px] border border-border shadow-warm-soft transition-transform hover:scale-[1.01]">
                    <div className="p-3 bg-accent-light-bg text-accent rounded-[12px] inline-block mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-secondary mb-3">{v.title}</h3>
                    <p className="text-xs md:text-sm text-secondary-light leading-relaxed font-sans">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-24 bg-page-bg">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                LEADERSHIP TEAM
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                Engineers of Productive Workspaces
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" ref={teamRef}>
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white p-8 rounded-[16px] border border-border shadow-warm-soft text-center flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 ${member.colorClass}`}>
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-secondary mb-1">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-accent mb-4 block">
                      {member.role}
                    </span>
                    <p className="text-xs text-secondary-light leading-relaxed font-sans max-w-xs">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border/60 pt-16">
              <p className="text-center text-[10px] font-sans font-bold uppercase tracking-widest text-secondary-light mb-10">
                Industry Assured & Commercially Certified
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
                <div className="p-4 rounded-[12px] bg-white border border-border shadow-sm flex flex-col justify-center items-center">
                  <Star className="w-5 h-5 text-accent mb-2" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">ISO 9001:2015</span>
                  <span className="text-[9px] text-secondary-light mt-0.5 font-sans">Quality Operations</span>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-border shadow-sm flex flex-col justify-center items-center">
                  <Shield className="w-5 h-5 text-accent mb-2" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">BWR Plywood</span>
                  <span className="text-[9px] text-secondary-light mt-0.5 font-sans">Marine Certified</span>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-border shadow-sm flex flex-col justify-center items-center">
                  <Zap className="w-5 h-5 text-accent mb-2" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">Acoustic Rated</span>
                  <span className="text-[9px] text-secondary-light mt-0.5 font-sans">dB reduction screens</span>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-border shadow-sm flex flex-col justify-center items-center">
                  <Target className="w-5 h-5 text-accent mb-2" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">GST Compliant</span>
                  <span className="text-[9px] text-secondary-light mt-0.5 font-sans">Corporate Ready</span>
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

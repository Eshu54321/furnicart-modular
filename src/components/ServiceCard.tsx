import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChefHat, DoorClosed, Tv, Flame, Building2, Layers, ShieldCheck, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: "ChefHat" | "DoorClosed" | "Tv" | "Flame" | "Building2" | "Layers" | "ShieldCheck";
  imageUrl: string;
  href: string;
}

const iconMap = {
  ChefHat: ChefHat,
  DoorClosed: DoorClosed,
  Tv: Tv,
  Flame: Flame,
  Building2: Building2,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
};

export default function ServiceCard({ title, description, iconName, imageUrl, href }: ServiceCardProps) {
  const IconComponent = iconMap[iconName];

  return (
    <div className="group bg-white rounded-[16px] border border-border shadow-warm-soft hover:shadow-warm-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Top Image Container */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-104"
        />
        {/* Overlay overlay */}
        <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Centered Overlapping Icon Badge */}
      <div className="relative flex justify-center -mt-[28px] z-10">
        <div className="w-14 h-14 rounded-full bg-primary text-white border-4 border-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {IconComponent && <IconComponent className="w-6 h-6 stroke-[1.75]" />}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-center">
        <div>
          <h3 className="font-serif text-[22px] font-bold text-secondary mb-3">
            {title}
          </h3>
          <p className="text-sm font-sans text-secondary-light leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="inline-flex items-center justify-center font-sans text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors duration-300 group/link"
        >
          <span className="relative py-0.5">
            Explore
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-250" />
          </span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

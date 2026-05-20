import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  location?: string;
  scope?: string;
  materials?: string;
  executionTime?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  category,
  image,
  location,
  scope,
  onClick,
}: ProjectCardProps) {
  const CardContent = (
    <div className="bg-white rounded-[16px] overflow-hidden border border-border shadow-warm-soft hover:shadow-warm-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer group">
      {/* Image Container */}
      <div className="aspect-[4/3] relative w-full overflow-hidden bg-border">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-104"
        />
        {/* Subtle oak hover tint */}
        <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* View Details Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 stroke-[2]" />
        </div>
      </div>
      
      {/* Info Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-primary mb-2 block">
            {category}
          </span>
          <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-secondary mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {location && scope && (
          <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-secondary-light font-sans font-medium">
            <span className="truncate">{location}</span>
            <span className="shrink-0 pl-2 text-primary font-semibold">{scope}</span>
          </div>
        )}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left focus:outline-none block">
        {CardContent}
      </button>
    );
  }

  return (
    <div className="w-full text-left">
      {CardContent}
    </div>
  );
}

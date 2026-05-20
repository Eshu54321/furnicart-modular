import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  projectType: string;
  avatarUrl?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  projectType,
  avatarUrl,
  rating = 5,
}: TestimonialCardProps) {
  // Generate beautiful, soft initials placeholder if avatarUrl is missing
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="relative bg-white p-8 md:p-10 rounded-[16px] border border-border shadow-warm-soft hover:shadow-warm-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
      {/* Decorative Gold Double Quote */}
      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 stroke-[1]" />

      <div className="relative z-10 flex-grow">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-accent text-accent" : "text-border"
              }`}
            />
          ))}
        </div>

        {/* Quote text */}
        <p className="font-serif italic text-secondary text-base md:text-[17px] leading-relaxed mb-8">
          "{quote}"
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center space-x-4 border-t border-border/60 pt-6 mt-auto">
        {avatarUrl ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-border shadow-sm">
            <Image
              src={avatarUrl}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
            {getInitials(author)}
          </div>
        )}

        <div>
          <h4 className="font-sans font-bold text-sm text-secondary uppercase tracking-wider">
            {author}
          </h4>
          <span className="text-[11px] font-sans text-secondary-light font-medium block mt-0.5">
            {location} <span className="text-accent/60 mx-1">|</span> {projectType}
          </span>
        </div>
      </div>
    </div>
  );
}

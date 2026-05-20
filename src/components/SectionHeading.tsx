import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass[align]}`}>
      {tag && (
        <span
          className={`inline-block font-sans text-xs font-bold uppercase tracking-widest mb-3 ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-sans leading-relaxed ${
            light ? "text-white/70" : "text-secondary-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

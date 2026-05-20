import React from "react";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type RegularButtonProps = ButtonBaseProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | RegularButtonProps;

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.05em] whitespace-nowrap transition-all duration-300 rounded-[8px] active:scale-[0.96] hover:shadow-warm-hover cursor-pointer";

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-warm-soft hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white shadow-sm hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-primary hover:text-primary-dark hover:underline underline-offset-4 border-none shadow-none active:scale-100 hover:shadow-none",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-7 py-3.5 text-[13px]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href !== undefined) {
    return (
      <Link href={href} className={combinedClasses} {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

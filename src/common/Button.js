"use client";

import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "group relative px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 active:scale-95 flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-accent to-primary text-white shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1",

    secondary:
      "border border-border/50 bg-secondary/30 backdrop-blur-md text-foreground",

    cta:
      "bg-white text-primary shadow-xl hover:shadow-2xl hover:-translate-y-1",

    outlineLight:
      "border-2 border-white text-white hover:bg-white hover:text-primary",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      
      {/* ===== PRIMARY BUTTON ===== */}
      {variant === "primary" && (
        <>
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-md rotate-12 transition-all duration-700 group-hover:left-[120%]" />
          </span>

          <span className="relative z-10 flex items-center gap-2">
            {children}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </>
      )}

      {/* ===== SECONDARY ONLY ===== */}
      {variant === "secondary" && (
        <>
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-12">
            {children}
          </span>

          <span className="absolute inset-0 flex items-center justify-center translate-y-12 transition-transform duration-300 group-hover:translate-y-0 text-primary">
            Explore Now →
          </span>
        </>
      )}

      {/* ===== OTHER VARIANTS (NO ANIMATION) ===== */}
      {(variant === "cta" || variant === "outlineLight") && (
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      )}

    </button>
  );
}
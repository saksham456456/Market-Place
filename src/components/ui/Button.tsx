"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

type CombinedProps = ButtonProps & HTMLMotionProps<"button">;

export const Button = React.forwardRef<HTMLButtonElement, CombinedProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-primary text-black hover:bg-emerald-400 border border-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      secondary:
        "bg-secondary text-white hover:bg-violet-600 border border-transparent",
      outline:
        "bg-transparent border border-primary text-primary hover:bg-primary/10",
      ghost: "bg-transparent text-foreground hover:bg-white/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

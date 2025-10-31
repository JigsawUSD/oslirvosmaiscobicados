"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CtaButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "bg-accent text-accent-foreground text-lg font-bold h-14 px-8 shadow-lg shadow-accent/30 transition-all duration-300 ease-in-out hover:bg-accent/90 hover:shadow-accent/50 hover:scale-105 active:scale-100",
        "animate-pulse-slow",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 h-6 w-6" />
    </Button>
  );
}

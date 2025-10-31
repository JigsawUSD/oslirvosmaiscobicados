"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CtaButton({ className, children, ...props }: ButtonProps) {
  const { toast } = useToast();

  const handlePurchaseClick = () => {
    toast({
      title: "Redirecionando para o Checkout",
      description: "Nosso processo de checkout seguro está sendo aberto...",
    });
    // In a real app, you would redirect to a checkout URL here.
  };

  return (
    <Button
      onClick={handlePurchaseClick}
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

// We need to add the animation to tailwind.config.ts and globals.css
// But for simplicity, let's add it here as a style tag, or better, in globals.css
// In a real app, extend tailwind.config.ts animation keyframes.
// For now, let's add a custom pulse animation in globals.css for a slower, more subtle effect.
// In globals.css:
/*
@keyframes pulse-slow {
  50% {
    opacity: .85;
    box-shadow: 0 0 0 10px rgba(var(--accent-hsl), 0);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 2.5s infinite;
}
*/
// The above comment is a note, let's just use a simple pulse for now
// by combining it with a scale transform
// Let's create a custom variant.

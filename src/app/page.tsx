"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { VslSection } from "@/components/sections/vsl-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { BookShowcase } from "@/components/sections/book-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PurchaseFlow } from "@/components/purchase-flow";
import AiRecommender from "@/components/ai-recommender";

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VslSection />
        <AdvantagesSection />
        <BookShowcase />
        <PurchaseFlow isUpsellOpen={isUpsellOpen} setIsUpsellOpen={setIsUpsellOpen} />
        <AiRecommender />
        <TestimonialsSection />
        <CtaSection onCtaClick={() => setIsUpsellOpen(true)} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

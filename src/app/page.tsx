"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { VslSection } from "@/components/sections/vsl-section";
import { BookShowcase } from "@/components/sections/book-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import AiRecommender from "@/components/ai-recommender";
import { PurchaseFlow } from "@/components/purchase-flow";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VslSection />
        <BookShowcase />
        <PurchaseFlow isUpsellOpen={isUpsellOpen} setIsUpsellOpen={setIsUpsellOpen} />
        <TestimonialsSection />
        <CtaSection onCtaClick={() => setIsUpsellOpen(true)} />
        <AiRecommender />
        <FaqSection />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}

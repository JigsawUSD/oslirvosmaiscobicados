"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VslSection } from "@/components/sections/vsl-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { BookShowcase } from "@/components/sections/book-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PurchaseFlow } from "@/components/purchase-flow";
import AiRecommender from "@/components/ai-recommender";
import { WhatsappTestimonials } from "@/components/sections/whatsapp-testimonials";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { StorySection } from "@/components/sections/story-section";

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <VslSection />
        <div className="py-8 text-center bg-background">
          <Link href="#ofertas">
            <CtaButton>
              QUERO MEU PACOTE
            </CtaButton>
          </Link>
        </div>
        <StorySection />
        <AdvantagesSection />
        <BookShowcase />
        <PurchaseFlow isUpsellOpen={isUpsellOpen} setIsUpsellOpen={setIsUpsellOpen} />
        <AiRecommender />
        <TestimonialsSection />
        <WhatsappTestimonials />
        <CtaSection onCtaClick={() => setIsUpsellOpen(true)} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

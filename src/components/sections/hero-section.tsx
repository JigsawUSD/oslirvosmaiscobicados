"use client";

import { CtaButton } from "@/components/cta-button";
import { CheckCircle, ArrowDown } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="py-16 sm:py-24 text-center bg-white dark:bg-card">
      <div className="container">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-primary">
          Acelere seu Sucesso com a Biblioteca Definitiva
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Tenha acesso instantâneo aos livros mais transformadores sobre finanças e desenvolvimento pessoal, por um preço que você não vai acreditar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <Link href="#ofertas" passHref>
            <CtaButton asChild>
              <a>
                QUERO MEU PACOTE
              </a>
            </CtaButton>
          </Link>
          <Link href="#books" passHref>
            <Button asChild variant="outline" size="lg">
              <a>
                <span>
                  Quais livros vêm no pacote?
                  <ArrowDown className="ml-2 h-5 w-5" />
                </span>
              </a>
            </Button>
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-muted-foreground">Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-muted-foreground">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-muted-foreground">Leia em Qualquer Dispositivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

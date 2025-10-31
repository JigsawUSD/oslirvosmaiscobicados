import { CtaButton } from "@/components/cta-button";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

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
        <div className="mt-8 flex justify-center">
          <Link href="#ofertas">
            <CtaButton>
              VER PACOTES
            </CtaButton>
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

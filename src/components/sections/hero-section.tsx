import { CtaButton } from "@/components/cta-button";
import { CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-28 text-center bg-white dark:bg-card">
      <div className="container">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-primary">
          Acelere seu Sucesso com a Biblioteca Definitiva
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Tenha acesso instantâneo a 10 dos livros mais transformadores sobre finanças e desenvolvimento pessoal, por um preço que você não vai acreditar.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton>
            QUERO MEU PACOTE POR R$9,90
          </CtaButton>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">
          <span className="line-through opacity-70">De R$150,00</span> por apenas <span className="font-bold text-primary">R$9,90</span> hoje!
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

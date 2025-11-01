"use client";

import { CtaButton } from "@/components/cta-button";
import { ThumbsDown, ThumbsUp, TrendingUp, XCircle } from "lucide-react";

interface CtaSectionProps {
  onCtaClick: () => void;
}

export function CtaSection({ onCtaClick }: CtaSectionProps) {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                A Decisão que Vai Definir Seu Futuro é Tomada Agora
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                Você tem dois caminhos. Qual você escolhe?
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* O Caminho da Estagnação */}
            <div className="bg-destructive/20 p-6 rounded-lg border border-destructive">
                <div className="flex items-center gap-3">
                    <ThumbsDown className="h-8 w-8 text-destructive" />
                    <h3 className="text-2xl font-bold">O Caminho da Estagnação</h3>
                </div>
                <p className="mt-4 text-primary-foreground/70">
                    Você pode fechar esta página e continuar sua rotina. Deixar para amanhã, procrastinar o seu desenvolvimento e ver as oportunidades passarem. O resultado? Frustração, arrependimento e a sensação de estar sempre no mesmo lugar.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" />
                        <span>Perder a chance de adquirir conhecimento que vale milhares de reais por um preço simbólico.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" />
                        <span>Continuar cometendo os mesmos erros financeiros e de carreira.</span>
                    </li>
                </ul>
            </div>

            {/* O Caminho da Transformação */}
            <div className="bg-green-500/20 p-6 rounded-lg border border-green-400">
                <div className="flex items-center gap-3">
                    <ThumbsUp className="h-8 w-8 text-green-400" />
                    <h3 className="text-2xl font-bold">O Caminho da Transformação</h3>
                </div>
                <p className="mt-4 text-primary-foreground/70">
                    Ou, você pode tomar uma atitude. Investir em você, no seu conhecimento e destravar seu potencial. Comece a construir a vida que você sonha, com mais prosperidade, inteligência emocional e sucesso.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-green-400/80 mt-1 shrink-0" />
                        <span>Aprender com os maiores especialistas do mundo e acelerar sua curva de aprendizado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-green-400/80 mt-1 shrink-0" />
                        <span>Desenvolver uma mentalidade de sucesso e tomar decisões mais inteligentes.</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold">Sua transformação começa com um clique. O risco é zero.</h3>
            <div className="mt-8 flex justify-center">
                <CtaButton onClick={onCtaClick}>
                    QUERO TRANSFORMAR MINHA VIDA AGORA!
                </CtaButton>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">Garantia de 7 dias e pagamento 100% seguro.</p>
        </div>
      </div>
    </section>
  );
}

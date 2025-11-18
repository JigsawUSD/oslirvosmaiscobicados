
"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CountdownTimer } from "@/components/countdown-timer";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaButton } from "@/components/cta-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TEN_MINUTES_IN_MS = 10 * 60 * 1000;
const presellImage = PlaceHolderImages.find(img => img.id === 'presell-image');

export default function PresellPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12 sm:py-20">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-8 text-center">
            O Que Faltava Para Dar Certo Não Era Sorte. Era Isso.
          </h1>

          {presellImage && (
            <div className="mb-8">
              <Image
                src={presellImage.imageUrl}
                alt={presellImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
                data-ai-hint={presellImage.imageHint}
              />
            </div>
          )}
          
          <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground space-y-6 text-left">
            <p>Depois de abrir alguns negócios ao longo dos anos e passar por situações desafiadoras, eu percebi que existia algo em comum em todas as minhas tentativas: eu sempre agia rápido demais e aprendia tarde demais.</p>
            <p>Chegou um momento em que eu realmente parei para refletir. Não era sobre sorte, não era sobre o mercado. Era sobre preparo.</p>
            <p>Em uma dessas fases complicadas, sentei comigo mesmo e fiz a pergunta que eu evitava há muito tempo: “O que, de fato, eu não estou enxergando?”</p>
            <p className="font-bold text-foreground">Eu não estava sem capacidade. Eu estava sem direção.</p>
            <p>Foi aí que eu decidi tentar novamente — mas de uma forma totalmente diferente. Antes de qualquer ação, eu precisava aprender. E, para isso, pedi ajuda a um amigo. Contei a ele minha intenção de estudar, ajustar minha mentalidade e agir de forma mais estratégica. Ele me apoiou.</p>
            <p>Com aquele voto de confiança, eu tracei um plano simples: primeiro conhecimento, depois execução.</p>
            <p className="p-6 bg-card border-l-4 border-primary rounded-r-lg shadow">Comecei a estudar temas que nunca tinha dado atenção: gestão, tomada de decisão, organização financeira, estratégia, comportamento e visão de longo prazo. E foi nesse processo que encontrei algo que fez toda diferença na minha forma de pensar e de agir: um conjunto de livros que se tornou essencial nessa virada.</p>
            <p>Esses livros não eram sobre atalhos, nem sobre fórmulas mágicas. Eram sobre clareza. Sobre entender como tomar decisões melhores, como analisar cenários e como construir algo sólido com base em conhecimento real.</p>
            <p>A segunda parte foi aplicar isso com consistência. Nada de pressa. Nada de impulsividade. Eu decidi seguir um plano, aprender um pouco todos os dias e aplicar com calma e foco.</p>
            <p>Com o tempo, tudo ficou mais claro. As escolhas ficaram mais alinhadas. As decisões ficaram mais seguras. E, aos poucos, os resultados começaram a aparecer.</p>
            <p className="text-xl font-semibold text-center">Hoje, olhando para trás, percebo que existiam apenas duas coisas que realmente faltavam nas minhas tentativas anteriores: entender antes de agir, e agir com constância.</p>
            <p>E é exatamente isso que compartilho com você agora: o mesmo conjunto de livros que me ajudou a desenvolver clareza, raciocínio estratégico e confiança para tomar decisões mais acertadas. Não é sobre prometer resultados. É sobre oferecer conhecimento que abre caminhos.</p>
            <p className="text-xl font-bold text-center text-primary">Se você está em fase de construção, recomeço ou reorganização, talvez esse seja o ponto de partida que faltava — assim como faltava pra mim.</p>
          </div>

          <div className="mt-10 p-6 bg-card border-2 border-dashed border-primary/50 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-primary">Preparamos Algo Especial Para Você</h2>
            <p className="mt-2 text-muted-foreground">
              O acesso ao conhecimento que me ajudou a encontrar um novo caminho está agora disponível para você. É uma oportunidade para expandir suas perspectivas.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/#vsl">
                <CtaButton>
                  QUERO DESCOBRIR QUAIS LIVROS SÃO ESSES.
                </CtaButton>
              </Link>
            </div>
          </div>
           <p className="mt-8 text-sm text-muted-foreground text-center">
            Clique no botão acima para ser redirecionado a uma página com uma oportunidade que você não vai acreditar.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

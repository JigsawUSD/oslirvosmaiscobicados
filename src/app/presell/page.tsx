
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
            O que faltava para dar certo não era sorte. Era isso...
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
            <p>Depois de abrir alguns negócios ao longo dos anos e passar por situações desafiadoras, eu percebi algo que demorou muito para cair a ficha: eu sempre vivi nos extremos.</p>
            <p>Ou eu agia rápido demais, ou me preparava tanto que não saía do lugar.</p>
            <p>Foi numa das fases mais difíceis que eu realmente sentei e me perguntei:</p>
            <p>“O que, de fato, eu não estou enxergando?”</p>
            <p>Eu não estava sem capacidade.</p>
            <p>Eu estava sem equilíbrio.</p>
            <p>Por muito tempo, eu fui aquela pessoa que se empolgava com qualquer oportunidade e já entrava de cabeça.</p>
            <p>Agia rápido, mudava rápido… e errava rápido.</p>
            <p>Eu confundia pressa com coragem.</p>
            <p>Só que muita ação sem preparo leva apenas a uma coisa:</p>
            <p>prejuízos desnecessários.</p>
            <p>É como dirigir à noite sem faróis — você até se move, mas não sabe para onde.</p>
            <p>Depois disso, virei o oposto.</p>
            <p>Passei a estudar tudo, analisar tudo, planejar cada detalhe.</p>
            <p>E, no final das contas, nada acontecia.</p>
            <p>Eu sempre achava que faltava aprender mais alguma coisa antes de agir.</p>
            <p>E isso me manteve parado.</p>
            <p>E aí percebi o outro extremo:</p>
            <p>muito preparo e pouca ação geram estagnação.</p>
            <p>Você aprende… mas não evolui.</p>
            <p>Foi nessa reflexão que eu decidi tentar novamente — mas dessa vez de forma diferente.</p>
            <p>Procurei um amigo, expliquei que queria reorganizar minha mente antes de dar qualquer passo e pedi ajuda para começar com mais consciência. Ele entendeu e me apoiou.</p>
            <p>Com esse voto de confiança, tracei um plano simples:</p>
            <p>primeiro clareza, depois movimento.</p>
            <p>Comecei a estudar temas que nunca tinha dado importância: estratégia, tomada de decisão, organização financeira, mentalidade e comportamento.</p>
            <p>E foi nesse processo que encontrei algo que realmente fez diferença:</p>
            <p>um conjunto de livros que ampliou minha visão e me ajudou a entender como tomar decisões com mais segurança e menos impulso.</p>
            <p>Esses livros não prometiam atalhos.</p>
            <p>Eles entregavam clareza.</p>
            <p>Me ajudavam a enxergar o caminho antes de andar por ele.</p>
            <p>Com esse entendimento, veio a parte mais importante: agir.</p>
            <p>Não com pressa, não com impulsividade.</p>
            <p>Mas com direção.</p>
            <p>E, pela primeira vez, eu consegui encontrar o meio-termo.</p>
            <p>Entendi antes de fazer.</p>
            <p>E fiz sem parar de entender.</p>
            <p>Com o tempo, tudo começou a se encaixar.</p>
            <p>As decisões se tornaram mais conscientes, as ideias ficaram mais organizadas, e o caminho que antes parecia confuso ficou mais nítido.</p>
            <p>Hoje eu vejo que tudo mudou no momento em que eu encontrei o equilíbrio entre estudo e ação.</p>
            <p>Porque um negócio só cresce quando você cresce junto.</p>
            <p>E para crescer, você precisa caminhar — mas sabendo onde está pisando.</p>
            <p>É exatamente esse tipo de clareza que quero compartilhar com você agora:</p>
            <p>o mesmo conjunto de livros que me ajudou a pensar melhor, decidir melhor e agir com mais confiança.</p>
            <p>Não é sobre fórmulas.</p>
            <p>É sobre consciência.</p>
            <p>Às vezes, a virada não está nem na pressa… nem na espera.</p>
            <p>Está no equilíbrio entre as duas.</p>
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

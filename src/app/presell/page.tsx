"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
          
          <div className="my-8 flex flex-col items-center gap-4">
            <div className="w-full max-w-md">
              <p className="text-center text-sm text-muted-foreground mb-2">Prefere ouvir? Dê o play abaixo.</p>
              <audio controls className="w-full">
                <source src="/audio/presell-story.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground space-y-6 text-left">
            <p>Depois de abrir alguns negócios ao longo dos anos e passar por situações desafiadoras, eu percebi algo que demorou muito para entender: eu sempre vivi nos extremos. Ou eu agia rápido demais, ou eu me preparava tanto que não saía do lugar.</p>
            <p className="text-xl italic text-center p-4">Em uma das fases mais difíceis, sentei comigo mesmo e fiz a pergunta que eu vinha evitando há muito tempo:<br /><strong>“O que, de fato, eu não estou enxergando?”</strong></p>
            <p>Foi aí que caiu a ficha.<br />Eu não estava sem capacidade.<br />Eu estava sem <strong className="text-primary">equilíbrio.</strong></p>
            <p>Por muito tempo, eu fui aquela pessoa que via uma oportunidade e já queria entrar de cabeça. Agia rápido, mudava rápido… e errava rápido. Confundia pressa com coragem. Mas a verdade é simples:<br />muita ação sem preparo leva a <strong className="text-destructive">prejuízos desnecessários.</strong><br />É como dirigir numa estrada escura: você até avança, mas bate a qualquer momento.</p>
            <p>Depois disso, virei o oposto. Passei a estudar tudo, analisar tudo, planejar cada detalhe. E, quanto mais eu estudava, menos eu agia. Sempre parecia faltar alguma coisa antes de dar o próximo passo.</p>
            <p>E aí percebi o segundo extremo:<br />muito preparo e pouca ação geram <strong className="text-destructive">estagnação.</strong><br />Você aprende, mas não evolui.</p>
            <p>Foi nesse momento de reflexão que eu decidi tentar novamente — mas dessa vez do jeito certo. Procurei um amigo, expliquei que queria reorganizar minha mente antes de dar qualquer passo e pedi ajuda para começar com mais consciência. Ele entendeu e me apoiou.</p>
            <p>Com esse voto de confiança, tracei um plano simples:<br /><strong className="text-primary">primeiro clareza, depois movimento.</strong></p>
            <p>Comecei a estudar temas que antes eu ignorava: estratégia, tomada de decisão, organização financeira, mentalidade, comportamento.<br />E foi nesse processo que encontrei algo que realmente fez diferença: um conjunto de livros que ampliou minha visão e me ajudou a entender como tomar decisões com mais segurança e menos impulso.</p>
            <p>Esses livros não prometiam atalhos.<br />Eles entregavam <strong className="text-foreground">clareza.</strong><br />Me ajudaram a enxergar o caminho antes de andar por ele.</p>
            <p>A segunda parte foi agir — não com pressa, mas com consciência.<br />Sem pular etapas, sem confundir movimento com progresso.<br />Simplesmente aplicando o que aprendi, um passo por vez.</p>
            <p>E, pela primeira vez, tudo começou a se encaixar.<br />As decisões ficaram mais seguras, as ideias mais organizadas, e aquilo que antes parecia confuso começou a fazer sentido.</p>
            <p>Hoje eu entendo que nada mudou por acaso.<br />A mudança começou quando eu encontrei o <strong className="text-primary">equilíbrio entre estudo e ação.</strong><br />Porque conhecimento sem prática te trava.<br />Ação sem conhecimento te machuca.<br />Mas o equilíbrio entre os dois te leva adiante.</p>
            <p className="font-bold text-foreground">E é exatamente esse tipo de clareza que quero compartilhar com você agora: o mesmo conjunto de livros que me ajudou a pensar melhor, decidir melhor e agir com mais confiança.</p>
            <p>Às vezes, a virada não está nem na pressa… nem na espera.<br />Está no <strong className="text-foreground">equilíbrio entre as duas.</strong></p>
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

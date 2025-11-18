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
            Você Realmente Acredita que o Sucesso é Sorte?
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
            <p>Depois de abrir vários negócios e quebrar algumas vezes, eu cheguei num ponto que muita gente conhece bem: aquele em que você olha pro próprio reflexo e pensa “cara… talvez eu simplesmente não sirva pra isso.” Eu não tinha mais motivação, não tinha mais confiança e, pra ser sincero, parecia que o universo estava me dizendo pra parar.</p>

            <p>E é louco como, às vezes, a vida te quebra não pra te destruir… mas pra te mostrar o que você estava ignorando.</p>

            <p>Eu sentei na cama, cansado, e me fiz a pergunta que eu vinha evitando por anos: “Se eu errei tantas vezes… será que o problema é o mercado? Ou será que sou eu?”</p>

            <p className="font-bold text-foreground">Essa resposta doeu. Mas foi ela que virou a chave.</p>

            <p>Na minha última quebra eu não tinha mais reserva, não tinha plano B, não tinha rede de segurança. Tinha só duas escolhas: aceitar que eu nasci pra ser mais um… ou tentar de novo — só que dessa vez do jeito certo.</p>

            <p>Com a cara e a coragem, mandei mensagem pra um amigo pedindo uma quantia pra tentar pela última vez. Eu sabia como aquilo soava. Eu sabia que eu parecia um caso perdido.</p>

            <p>Ele demorou pra responder. E aqueles segundos pareceram anos. Até que ele mandou: “Eu confio na tua visão. Mas dessa vez aprende antes de fazer.”</p>
            
            <p className="p-6 bg-card border-l-4 border-primary rounded-r-lg shadow">Foi aí que eu entendi que o que faltava em todas as tentativas anteriores eram só duas coisas. Simples. Óbvias. Mas que eu nunca tinha praticado de verdade.</p>

            <p><strong className="text-primary">A primeira era conhecimento antes da pressa.</strong> Eu sempre fui impulsivo. Via oportunidade e ia. Só que oportunidade sem preparo vira prejuízo. E, nessa busca por aprender, eu encontrei algo que mudou completamente minha trajetória: meu Conjunto de Livros Especiais.</p>

            <p>Não eram livros motivacionais vazios. Eram livros que mostravam como pessoas ricas realmente pensam, como tomam decisões, como evitam erros, como constroem riqueza, como analisam riscos e como transformam pequenos negócios em resultados gigantes.</p>

            <p>Era o conhecimento que eu precisava desde o primeiro dia. E eu só descobri quando estava no fundo do poço. Mas ainda dava tempo.</p>

            <p><strong className="text-primary">A segunda coisa era disciplina mesmo quando nada acontece.</strong> Porque o jogo não muda quando você quer… o jogo muda quando você repete.</p>

            <p>Todo santo dia. Mesmo cansado. Mesmo sem resultados. Mesmo sem ninguém acreditando.</p>

            <p>Eu parei de pular de ideia em ideia. Parei de desistir ao primeiro sinal de dificuldade. Pela primeira vez na vida, eu segui um plano até o fim.</p>

            <p className="text-xl font-semibold text-center">E foi ali, silenciosamente, que a virada começou. Devagar. Depois mais rápido. Depois inevitável.</p>

            <p>O negócio deu certo. Eu paguei meu amigo. Paguei minhas dívidas. E, principalmente, paguei a versão de mim que nunca desistiu.</p>

            <p>Hoje, quando alguém me pergunta o que eu faria diferente, eu respondo sem pensar: <strong className="text-foreground">“Eu teria começado pelos livros certos.”</strong> Porque um negócio só cresce quando você cresce antes dele.</p>

            <p className="text-xl font-bold text-center text-primary">E é isso que eu quero te mostrar agora. O mesmo conhecimento que virou a minha última tentativa… pode ser o começo da sua primeira grande virada.</p>
          </div>

          <div className="mt-10 p-6 bg-card border-2 border-dashed border-primary/50 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-primary">Preparamos Algo Especial Para Você</h2>
            <p className="mt-2 text-muted-foreground">
              A mesma oportunidade que me fez prosperar está agora ao seu alcance. É a sua chance de ter o conhecimento certo para finalmente mudar de vida.
            </p>
             <div className="my-6 flex justify-center">
                <div className="w-full max-w-xs p-3 bg-destructive/10 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-destructive">
                        <Clock className="h-5 w-5" />
                        Acesso a esta condição especial expira em:
                    </div>
                    <CountdownTimer 
                        initialDurationInMs={TEN_MINUTES_IN_MS}
                        storageKey="presellOfferEndTime"
                        onExpire={() => {}} // Não faz nada ao expirar por enquanto
                        className="text-center text-3xl font-mono font-bold tracking-widest p-2 text-destructive"
                        expiredText="OFERTA ENCERRADA"
                    />
                </div>
            </div>
            <div className="flex justify-center">
              <Link href="/#vsl">
                <CtaButton>
                  QUERO DESCOBRIR QUAIS LIVROS SÃO ESSES.
                </CtaButton>
              </Link>
            </div>
          </div>
           <p className="mt-8 text-sm text-muted-foreground text-center">
            Clique no botão acima para ser redirecionado a uma página com uma oferta que você não vai acreditar.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

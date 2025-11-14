"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "@/components/countdown-timer";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const TEN_MINUTES_IN_MS = 10 * 60 * 1000;

export default function PresellPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Você Realmente Acredita que o Sucesso é Sorte?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Por anos, eu também acreditei. Via pessoas prosperando e pensava que elas tinham um "toque de Midas" que eu não tinha. A verdade, que descobri a um custo muito alto, é que elas não são mais inteligentes ou sortudas. Elas apenas tiveram acesso ao <span className="font-bold text-foreground">conhecimento certo</span>.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Elas aprenderam com os gigantes. Beberam da fonte de sabedoria de pessoas que já trilharam o caminho do sucesso e deixaram um mapa. E se eu te dissesse que esse mapa está disponível para você AGORA?
          </p>
          <div className="mt-10 p-6 bg-card border-2 border-dashed border-primary/50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary">Preparamos Algo Especial Para Você</h2>
            <p className="mt-2 text-muted-foreground">
              Uma oportunidade única de ter acesso a uma biblioteca de conhecimento que pode mudar o rumo da sua vida financeira e pessoal. Esta é a sua chance de parar de andar em círculos.
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
            <Link href="/#ofertas">
              <Button size="lg" className="bg-accent text-accent-foreground text-lg font-bold h-14 px-8 shadow-lg shadow-accent/30 transition-all duration-300 ease-in-out hover:bg-accent/90 hover:shadow-accent/50 hover:scale-105 active:scale-100">
                QUERO DESCOBRIR O SEGREDO
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
           <p className="mt-8 text-sm text-muted-foreground">
            Clique no botão acima para ser redirecionado a uma página com uma oferta que você não vai acreditar.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

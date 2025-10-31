"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export function PurchaseFlow() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const { toast } = useToast();

  const handlePurchaseClick = (product: string, price: string) => {
    toast({
      title: "Redirecionando para o Checkout",
      description: `Produto: ${product} - Preço: R$${price}`,
    });
    // In a real app, you would redirect to a checkout URL here.
  };

  const handleBasicPackClick = () => {
    setIsUpsellOpen(true);
  };

  const handleUpsellAccept = () => {
    setIsUpsellOpen(false);
    handlePurchaseClick("Pacote Mais Vendidos (Desconto)", "14,90");
  };

  const handleUpsellDecline = () => {
    setIsUpsellOpen(false);
    handlePurchaseClick("Pacote Básico", "9,90");
  };

  return (
    <>
      <section id="ofertas" className="py-12 sm:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Escolha o Pacote Ideal para Você
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Temos duas opções incríveis para turbinar seu conhecimento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pacote Básico */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Pacote Básico</CardTitle>
                <CardDescription>10 Livros Essenciais</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">R$9,90</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>10 livros sobre sucesso e finanças</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Acesso imediato e vitalício</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={handleBasicPackClick} className="w-full" size="lg">
                  Quero o Pacote Básico
                </Button>
              </CardFooter>
            </Card>

            {/* Pacote Mais Vendidos */}
            <Card className="flex flex-col border-2 border-primary shadow-lg relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Star className="h-4 w-4" />
                MAIS VENDIDO
              </div>
              <CardHeader>
                <CardTitle>Pacote Mais Vendidos</CardTitle>
                <CardDescription>15 Livros de Alto Impacto</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">R$19,90</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Tudo do Pacote Básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>+ 5 best-sellers extras</span>
                  </li>
                   <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>O melhor custo-benefício</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handlePurchaseClick("Pacote Mais Vendidos", "19,90")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  Quero o Pacote Mais Vendido
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isUpsellOpen} onOpenChange={setIsUpsellOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary font-bold">ESPERE! OFERTA ESPECIAL!</DialogTitle>
            <DialogDescription className="text-center text-lg">
              Você recebeu um <span className="font-bold text-accent">desconto exclusivo!</span>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-lg">Leve o <span className="font-bold">Pacote com 15 Livros</span> por apenas:</p>
            <p className="text-5xl font-extrabold text-primary my-2">R$14,90</p>
            <p className="text-muted-foreground line-through">De R$19,90</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={handleUpsellAccept} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              SIM, EU QUERO A OFERTA!
            </Button>
            <Button onClick={handleUpsellDecline} variant="outline">
              Não, obrigado. Quero apenas o pacote básico por R$9,90.
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

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
import { Check, Star, Clock, AlertTriangle } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";

interface PurchaseFlowProps {
  isUpsellOpen: boolean;
  setIsUpsellOpen: (isOpen: boolean) => void;
}

const TWO_HOURS_IN_MS = 2 * 60 * 60 * 1000;
const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

export function PurchaseFlow({ isUpsellOpen, setIsUpsellOpen }: PurchaseFlowProps) {
  const [isOfferExpired, setIsOfferExpired] = useState(false);
  const [isSecondChanceOpen, setIsSecondChanceOpen] = useState(false);
  const [isSecondChanceExpired, setIsSecondChanceExpired] = useState(false);
  const [hasSeenSecondChance, setHasSeenSecondChance] = useState(false);
  const { toast } = useToast();

  const initialPrice = "19,90";
  const secondChancePrice = "29,90";
  const finalPrice = "39,90";
  
  const checkoutUrlInitial = 'https://pay.cakto.com.br/wjz9dxz';
  const checkoutUrlSecondChance = 'https://pay.cakto.com.br/3az26a7';
  const checkoutUrlFinal = 'https://pay.cakto.com.br/wsmgs42';


  const handlePurchaseClick = (product: string, price: string) => {
    let url = checkoutUrlInitial;
    if (isSecondChanceExpired) {
        url = checkoutUrlFinal;
    } else if (isOfferExpired || hasSeenSecondChance) {
        url = checkoutUrlSecondChance;
    }

    if (url) {
      window.location.href = url;
    } else {
      toast({
        title: "Redirecionando para o Checkout",
        description: `Produto: ${product} - Preço: R$${price}`,
      });
    }
  };

  const handleBasicPackClick = () => {
    setIsUpsellOpen(true);
  };

  const handleUpsellAccept = () => {
    window.location.href = 'https://pay.cakto.com.br/tzdmujy_643570';
  };

  const handleUpsellDecline = () => {
    window.location.href = 'https://pay.cakto.com.br/k92vi68_642845';
  };
  
  const handleMainOfferExpire = () => {
    setIsOfferExpired(true);
    if (!hasSeenSecondChance) {
      setIsSecondChanceOpen(true);
    }
  }
  
  const handleSecondChancePurchase = () => {
    handleCloseSecondChance(false);
    // Redirect to second chance checkout
    window.location.href = checkoutUrlSecondChance;
  }

  const handleCloseSecondChance = (isOpen: boolean) => {
    setIsSecondChanceOpen(isOpen);
    if (!isOpen) {
      setHasSeenSecondChance(true);
    }
  }

  const getBestSellerPrice = () => {
    if (isSecondChanceExpired) return finalPrice;
    if (isOfferExpired || hasSeenSecondChance) return secondChancePrice;
    return initialPrice;
  }

  const getStrikethroughPrice = () => {
    if (isSecondChanceExpired) return secondChancePrice;
    if (isOfferExpired || hasSeenSecondChance) return initialPrice;
    return null;
  }

  const strikethroughPrice = getStrikethroughPrice();


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
                <CardDescription>10 Livros + 5 Bônus</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <p className={`text-4xl font-bold ${(isOfferExpired || hasSeenSecondChance) && !isSecondChanceExpired ? 'text-destructive' : ''}`}>
                    R${getBestSellerPrice()}
                  </p>
                  {strikethroughPrice && (
                     <p className="text-lg text-muted-foreground line-through">R${strikethroughPrice}</p>
                  )}
                </div>
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
              <CardFooter className="flex flex-col gap-4">
                <Button onClick={() => handlePurchaseClick("Pacote Mais Vendidos", getBestSellerPrice())} className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSecondChanceOpen}>
                  Quero o Pacote Mais Vendido
                </Button>
                <div className="w-full p-2 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-destructive">
                    <Clock className="h-5 w-5" />
                    A oferta expira em:
                  </div>
                  <CountdownTimer 
                    initialDurationInMs={TWO_HOURS_IN_MS}
                    storageKey="mainOfferEndTime"
                    onExpire={handleMainOfferExpire}
                    expiredText={isSecondChanceExpired ? "Todas as ofertas expiraram" : "Oferta Expirada!"}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isUpsellOpen} onOpenChange={setIsUpsellOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-center text-primary font-bold">ESPERE! OFERTA ESPECIAL!</DialogTitle>
            <DialogDescription className="text-center text-base sm:text-lg">
              Você recebeu um <span className="font-bold text-accent">desconto exclusivo!</span>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-base sm:text-lg">Leve o <span className="font-bold">Pacote Completo (10+5 Livros)</span> por apenas:</p>
            <p className="text-4xl sm:text-5xl font-extrabold text-primary my-2">R$14,90</p>
            <p className="text-muted-foreground line-through">De R${initialPrice}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={handleUpsellAccept} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
              SIM, EU QUERO A OFERTA!
            </Button>
            <Button onClick={handleUpsellDecline} variant="outline" className="text-sm">
              Não, obrigado. Quero apenas o pacote básico por R$9,90.
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isSecondChanceOpen} onOpenChange={handleCloseSecondChance}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader className="items-center">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <DialogTitle className="text-xl sm:text-2xl text-center text-destructive font-bold">A OFERTA EXPIROU!</DialogTitle>
            <DialogDescription className="text-center text-base sm:text-lg">
             Eu disse que iria expirar. Isso é sobre o seu comprometimento, não comigo, mas com você mesmo.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center border-t border-b">
             <p className="font-bold text-primary">Vou te dar uma segunda e ÚLTIMA chance.</p>
            <p className="text-base sm:text-lg mt-4">Leve o <span className="font-bold">Pacote Completo (10+5 Livros)</span> com um novo desconto:</p>
            <p className="text-4xl sm:text-5xl font-extrabold text-primary my-2">R${secondChancePrice}</p>
            <p className="text-muted-foreground line-through">De R${finalPrice}</p>
          </div>
          <div className="flex flex-col gap-3">
             <div className="w-full p-2 bg-destructive/10 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-destructive">
                    <Clock className="h-5 w-5" />
                    Esta nova oferta expira em:
                  </div>
                  <CountdownTimer
                    initialDurationInMs={THIRTY_MINUTES_IN_MS}
                    storageKey="secondChanceOfferEndTime"
                    onExpire={() => {
                        setIsSecondChanceExpired(true);
                        handleCloseSecondChance(false);
                    }}
                    className="text-center text-2xl font-mono font-bold tracking-widest p-2 text-destructive"
                  />
                </div>
            <Button onClick={handleSecondChancePurchase} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
              QUERO MINHA ÚLTIMA CHANCE
            </Button>
            <Button onClick={() => handleCloseSecondChance(false)} variant="outline" className="text-sm">
              Não, perdi a oportunidade.
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

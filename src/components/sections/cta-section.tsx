import { CtaButton } from "@/components/cta-button";

export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Pronto para Começar sua Transformação?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Não perca esta oportunidade única de adquirir conhecimento que vale ouro por um preço simbólico. O acesso é imediato e o risco é zero.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton>
            SIM, EU QUERO O PACOTE POR R$9,90!
          </CtaButton>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/60">Garantia de 7 dias e pagamento 100% seguro.</p>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank, Sparkles, Smartphone, Library } from "lucide-react";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-12 sm:py-20 bg-white dark:bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6 mb-12">
           <div className="text-center">
             <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                Conjunto de Livros Mais Cobiçados de Finanças
             </h2>
           </div>
          <p>
            Dentro deste conjunto, você terá acesso imediato a alguns dos livros mais desejados e estudados da área financeira. São obras que reúnem ideias, estratégias e conhecimentos capazes de mudar sua forma de enxergar dinheiro — sem promessas, sem fórmulas mágicas.
          </p>
          <p className="p-4 bg-muted/50 border-l-4 border-primary rounded-r-lg text-foreground italic">
            Eu entrego os livros. O aprendizado e os resultados dependem totalmente de você.
          </p>
          <p>
            Se o seu objetivo é evoluir, entender mais sobre riqueza, investimentos e construção financeira, este conjunto fornece exatamente o que você precisa: <strong className="text-foreground">conteúdo valioso e difícil de encontrar, reunido em um só lugar.</strong>
          </p>
        </div>


        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Uma Oferta Simplesmente Irrecusável
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Veja por que esta é a melhor decisão que você tomará hoje para seu desenvolvimento pessoal e profissional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <PiggyBank className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Economia Absurda</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tenha acesso a uma biblioteca avaliada em mais de <span className="font-bold text-foreground">R$200,00</span> pagando o preço de um lanche. É um investimento mínimo com um retorno gigantesco para sua vida.
              </p>
              <div className="mt-4 p-4 rounded-lg border border-dashed text-center">
                <div className="flex items-baseline justify-center text-center gap-2">
                  <span className="text-2xl font-bold text-destructive line-through">R$200+</span>
                  <span className="text-4xl font-extrabold text-green-600">R$9,90</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
               <div className="p-3 rounded-full bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Acesso Imediato e Portátil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Chega de esperar pela entrega ou carregar peso. Após a compra, você recebe o acesso <span className="font-bold text-foreground">instantaneamente</span> e pode ler em seu celular, tablet ou computador, onde e quando quiser.
              </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
                    <p className="font-semibold text-foreground">Sua biblioteca de sucesso na palma da sua mão.</p>
                </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

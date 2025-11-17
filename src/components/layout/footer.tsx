import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-6 text-center">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex flex-col gap-2">
                    <p className="text-sm leading-loose text-muted-foreground">
                        © {new Date().getFullYear()} LivrosMaisCobiçados. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
                        A pirataria é crime. A venda deste material só pode ser realizada através deste site. Qualquer outra forma de distribuição ou venda é ilegal e viola os direitos autorais, conforme previsto na Lei nº 9.610/98 e no Art. 184 do Código Penal.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/termos-de-uso" className="hover:underline">Termos de uso</Link>
                    <span>-</span>
                    <Link href="/politicas-de-privacidade" className="hover:underline">Políticas de privacidade</Link>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                 <div className="max-w-3xl mx-auto p-4 bg-background/10 rounded-lg">
                    <h4 className="font-bold text-sm text-primary-foreground/80 mb-2">Cláusula Facebook</h4>
                    <p className="text-xs text-primary-foreground/60">
                        Este site não é afiliado ao Facebook или a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

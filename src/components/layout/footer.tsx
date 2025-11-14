import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center">
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
    </footer>
  );
}

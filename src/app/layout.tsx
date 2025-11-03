import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'LivrosMaisCobiçados - Seu Pacote de Livros de Sucesso',
  description: 'Adquira 10 dos livros mais procurados sobre sucesso e finanças por um preço imbatível.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <Script id="cloaker-script" strategy="afterInteractive">
          {`
            var url_link_redirect_pc = "https://blog.alliate.com.br/10-melhores-livros-sobre-financas-e-investimentos/";
            function isMobile() {
              const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
              return regex.test(navigator.userAgent);
            }
            if (!isMobile()) {
              window.location.href = url_link_redirect_pc;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
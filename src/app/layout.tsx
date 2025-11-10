import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
    <html lang="pt-BR" className={cn('scroll-smooth', inter.variable)}>
      <head>
        {/*
        <Script id="cloaker-script" strategy="beforeInteractive">
          {`
            (function() {
              var _a = 'aHR0cHM6Ly9ibG9nLmFsbGlhdGUuY29tLmJyLzEwLW1lbGhvcmVzLWxpdnJvcy1zb2JyZS1maW5hbmNhcy1lLWludmVzdGltZW50b3Mv';
              var _b = ['An', 'dro', 'id', '|', 'web', 'OS', '|i', 'Pho', 'ne|', 'iPa', 'd|iP', 'od|', 'Bla', 'ckB', 'erry', '|IEM', 'obi', 'le|O', 'pera', ' Mi', 'ni'].join('');
              var _c = new RegExp(_b, 'i');
              var _d = navigator['userAgent'];
              if (!_c.test(_d)) {
                window['location']['href'] = atob(_a);
              }
            })();
          `}
        </Script>
        */}
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

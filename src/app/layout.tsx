import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { cloakerScript } from '@/lib/cloaker';

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
        <Script id="cloaker-script" strategy="beforeInteractive">
          {cloakerScript}
        </Script>
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

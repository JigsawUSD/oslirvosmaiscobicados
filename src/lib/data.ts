import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: ImagePlaceholder;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: ImagePlaceholder;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

function findImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Quem Pensa Enriquece',
    author: 'Napoleon Hill',
    description: 'A filosofia clássica de Napoleon Hill para o sucesso, baseada em entrevistas com mais de 500 milionários.',
    image: findImage('book-think-grow-rich'),
  },
  {
    id: '2',
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert T. Kiyosaki',
    description: 'O que os ricos ensinam a seus filhos sobre dinheiro que os pobres e a classe média não ensinam.',
    image: findImage('book-rich-dad-poor-dad'),
  },
  {
    id: '3',
    title: 'Os 7 Hábitos das Pessoas Altamente Eficazes',
    author: 'Stephen R. Covey',
    description: 'Um guia holístico e integrado para resolver problemas pessoais e profissionais.',
    image: findImage('book-7-habits'),
  },
  {
    id: '4',
    title: 'Como Fazer Amigos e Influenciar Pessoas',
    author: 'Dale Carnegie',
    description: 'O manual de relações humanas mais vendido de todos os tempos, com técnicas para o sucesso.',
    image: findImage('book-win-friends'),
  },
  {
    id: '5',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    description: 'Uma exploração científica de por que os hábitos existem e como eles podem ser mudados.',
    image: findImage('book-power-habit'),
  },
  {
    id: '6',
    title: 'Rápido e Devagar',
    author: 'Daniel Kahneman',
    description: 'Uma visão sobre os dois sistemas que moldam nosso pensamento: o rápido, intuitivo e emocional; e o lento, deliberativo e lógico.',
    image: findImage('book-thinking-fast-slow'),
  },
  {
    id: '7',
    title: 'Antifrágil',
    author: 'Nassim Nicholas Taleb',
    description: 'Coisas que se beneficiam com o caos. Um guia para prosperar em um mundo de incertezas.',
    image: findImage('book-antifragile'),
  },
  {
    id: '8',
    title: 'Mindset: A Nova Psicologia do Sucesso',
    author: 'Carol S. Dweck',
    description: 'Descubra como o nosso mindset — fixo ou de crescimento — molda nosso sucesso e felicidade.',
    image: findImage('book-mindset'),
  },
  {
    id: '9',
    title: 'Trabalhe 4 Horas por Semana',
    author: 'Timothy Ferriss',
    description: 'Escape da rotina, viva onde quiser e junte-se aos novos ricos.',
    image: findImage('book-4-hour-workweek'),
  },
  {
    id: '10',
    title: 'O Investidor Inteligente',
    author: 'Benjamin Graham',
    description: 'O livro clássico sobre "investimento em valor", considerado a bíblia do mercado de ações.',
    image: findImage('book-intelligent-investor'),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana S.',
    title: 'Empreendedora Digital',
    quote: 'Este pacote de livros mudou minha perspectiva sobre negócios e finanças. O valor que recebi por apenas R$9,90 é inacreditável. Recomendo a todos!',
    avatar: findImage('testimonial-1'),
  },
  {
    id: '2',
    name: 'Marcos P.',
    title: 'Estudante Universitário',
    quote: 'Finalmente tive acesso a livros que sempre quis ler, mas achava muito caros. A entrega foi instantânea e a qualidade dos PDFs é excelente.',
    avatar: findImage('testimonial-2'),
  },
  {
    id: '3',
    name: 'Carla M.',
    title: 'Gerente de Projetos',
    quote: 'Comprei por recomendação e foi o melhor investimento do meu ano. As lições desses livros já estão impactando positivamente minha carreira e vida pessoal.',
    avatar: findImage('testimonial-3'),
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq1',
    question: 'Como receberei os livros?',
    answer: 'Após a confirmação do pagamento, você receberá um e-mail com um link para baixar todos os 10 livros em formato PDF imediatamente.',
  },
  {
    id: 'faq2',
    question: 'Posso ler os livros em qualquer dispositivo?',
    answer: 'Sim! Os livros são em formato PDF, compatíveis com qualquer smartphone, tablet, e-reader (Kindle, Kobo, etc.) ou computador.',
  },
  {
    id: 'faq3',
    question: 'A compra é segura?',
    answer: 'Com certeza. Utilizamos uma plataforma de pagamento reconhecida e segura, garantindo a proteção dos seus dados.',
  },
  {
    id: 'faq4',
    question: 'E se eu não gostar?',
    answer: 'Oferecemos uma garantia de satisfação de 7 dias. Se por qualquer motivo você não estiver satisfeito, basta nos contatar para receber o reembolso completo.',
  },
  {
    id: 'faq5',
    question: 'Até quando vou poder acessar os livros após a compra?',
    answer: 'O acesso aos livros é vitalício.',
  },
];

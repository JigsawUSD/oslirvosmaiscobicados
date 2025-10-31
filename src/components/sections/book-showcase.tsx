import Image from 'next/image';
import { books } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function BookShowcase() {
  return (
    <section id="books" className="py-12 sm:py-20 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Conheça os Livros Que Irão Alavancar Sua Vida
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            De clássicos atemporais a best-sellers modernos, nossos pacotes foram cuidadosamente selecionados para o seu sucesso.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {books.map((book) => (
            <div key={book.id} className="group flex flex-col items-center text-center">
              <Card className="w-full h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-primary">
                <CardContent className="p-0">
                  <div className="aspect-[2/3] relative">
                    <Image
                      src={book.image.imageUrl}
                      alt={`Capa do livro ${book.title}`}
                      fill
                      className="object-cover"
                      data-ai-hint={book.image.imageHint}
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </CardContent>
              </Card>
              <h3 className="mt-4 font-bold text-sm sm:text-base leading-tight">{book.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

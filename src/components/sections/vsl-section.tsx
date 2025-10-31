import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export function VslSection() {
  const vslThumbnail = PlaceHolderImages.find(img => img.id === 'vsl-thumbnail');

  if (!vslThumbnail) return null;

  return (
    <section id="vsl" className="py-12 sm:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Descubra como estes livros podem mudar sua vida
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Assista ao vídeo abaixo e veja por que este pacote é um divisor de águas.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer group">
            <Image
              src={vslThumbnail.imageUrl}
              alt={vslThumbnail.description}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={vslThumbnail.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="h-20 w-20 text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

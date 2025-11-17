
"use client"

import Image from "next/image"
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

function findImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
}

const whatsappTestimonials: ImagePlaceholder[] = [
  findImage("whatsapp-testimonial-1"),
  findImage("whatsapp-testimonial-4"),
];


export function WhatsappTestimonials() {
  return (
    <section id="whatsapp-testimonials" className="py-12 sm:py-20 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            A Prova Social que Você Precisava
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo em tempo real. Resultados reais, pessoas reais.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        >
          <CarouselContent>
            {whatsappTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                       <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.description}
                          width={400}
                          height={800}
                          className="object-contain"
                          data-ai-hint={testimonial.imageHint}
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}

import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            O Que Nossos Leitores Estão Dizendo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Milhares de pessoas já transformaram suas vidas. Veja algumas de suas histórias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <div className="bg-muted/50 p-6 flex items-center gap-4 rounded-b-lg">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage 
                    src={testimonial.avatar.imageUrl} 
                    alt={testimonial.name} 
                    data-ai-hint={testimonial.avatar.imageHint}
                    width={48}
                    height={48}
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';

export function VslSection() {
  // ATENÇÃO: Substitua a URL abaixo pela URL do seu próprio vídeo.
  // O vídeo deve estar hospedado em algum lugar acessível publicamente ou na pasta /public do projeto.
  const [videoUrl, setVideoUrl] = useState("https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");

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
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            <video
              key={videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              controls
              autoPlay
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

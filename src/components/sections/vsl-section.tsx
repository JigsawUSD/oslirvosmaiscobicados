"use client";

import { useState, type ChangeEvent } from 'react';

export function VslSection() {
  const [videoUrl, setVideoUrl] = useState("https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

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
              muted
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
          <div className="mt-4">
            <label htmlFor="video-upload" className="block text-sm font-medium text-muted-foreground mb-2">
              Para adicionar seu vídeo permanentemente, coloque o arquivo na pasta 'public' e me diga o nome do arquivo.
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
             <p className="text-xs text-muted-foreground mt-1">
              (Use o campo acima para testar um vídeo localmente)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function VslSection() {
  const [videoUrl, setVideoUrl] = useState("https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
  const [fileName, setFileName] = useState("");

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setFileName(file.name);
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
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg">
          <Label htmlFor="video-upload" className="font-bold">Carregar seu vídeo VSL</Label>
          <Input 
            id="video-upload" 
            type="file" 
            accept="video/*" 
            onChange={handleVideoUpload}
            className="mt-2"
          />
          {fileName && <p className="text-sm text-muted-foreground mt-2">Vídeo selecionado: {fileName}</p>}
        </div>
      </div>
    </section>
  );
}
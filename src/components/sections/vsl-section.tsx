"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function VslSection() {
  const [videoUrl, setVideoUrl] = useState<string | null>("/Você já parou para pensar por que algumas pessoas parecem.web");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            {videoUrl && (
              <video
                ref={videoRef}
                key={videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                controls
                autoPlay
                muted
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
          </div>
          <div className="mt-4">
              <Label htmlFor="video-upload" className="mb-2 block">Faça o upload do seu vídeo VSL:</Label>
              <Input 
                id="video-upload" 
                type="file" 
                accept="video/*" 
                onChange={handleFileChange} 
                className="file:text-primary file:font-semibold hover:file:bg-primary/10"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Este upload é apenas para visualização local e não será salvo permanentemente.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
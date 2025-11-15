"use client";

import { useState } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // YouTube video ID
  const videoId = "AV8vBaVwvhU";
  
  // YouTube Iframe URL with parameters to hide controls and enable JS API
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}&enablejsapi=1&rel=0&showinfo=0&modestbranding=1`;

  const handlePlay = () => {
    setIsPlaying(true);
    setShowOverlay(false);
  };
  
  // Note: True pause/resume requires YouTube's Iframe API. 
  // This simulates the visual effect requested by the user.
  // For simplicity, we just toggle the overlay. The video will continue playing.
  const handleOverlayClick = () => {
    if (!isPlaying) {
      handlePlay();
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
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black group">
            {showOverlay && (
              <div 
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 cursor-pointer"
                onClick={handleOverlayClick}
              >
                <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors" />
                <p className="mt-4 text-white text-xl font-semibold">
                  Clique no play para assistir ao vídeo
                </p>
              </div>
            )}
            {/* The iframe is always present but the overlay controls the interaction */}
            <iframe
              id="vsl-player"
              className="absolute top-0 left-0 w-full h-full"
              src={isPlaying ? videoUrl : ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState, useRef, useEffect } from "react";
import { PlayCircle, PauseCircle, X } from "lucide-react";

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const videoId = "AV8vBaVwvhU";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&autoplay=1`;

  const postMessageToPlayer = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: func,
        args: args,
      }), '*');
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (showInitialOverlay) {
      setShowInitialOverlay(false);
    }
    // Delay sending the message to give the iframe time to be ready
    setTimeout(() => postMessageToPlayer("playVideo"), 100);
  };

  const handlePause = () => {
    postMessageToPlayer("pauseVideo");
    setIsPlaying(false);
  };
  
  // Close modal and pause video on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPlaying) {
        handlePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

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
          {/* Static Thumbnail */}
          <div 
            onClick={handlePlay}
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black group cursor-pointer"
          >
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 transition-opacity duration-300"
            >
              <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors" />
              <p className="mt-4 text-white text-xl font-semibold">
                Clique no play para assistir ao vídeo
              </p>
            </div>
             <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Video Thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Modal Video Player */}
      {isPlaying && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handlePause}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); handlePause(); }}
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Fechar</span>
          </button>
          
          <div 
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the video itself
          >
            <iframe
              ref={iframeRef}
              id="vsl-player"
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

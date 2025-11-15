
"use client";

import { useState, useRef, useEffect } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // YouTube video ID
  const videoId = "AV8vBaVwvhU";
  
  // YouTube Iframe URL com parâmetros para esconder controles e habilitar JS API
  const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1`;

  // Função para enviar comandos para o YouTube Iframe API
  const postMessageToPlayer = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: func,
        args: args,
      }), '*');
    }
  };
  
  const enterFullscreen = () => {
    containerRef.current?.requestFullscreen().catch(err => {
      console.error("Error attempting to enable full-screen mode:", err.message, `(${err.name})`);
    });
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };
  
  const handlePlay = () => {
      setIsPlaying(true);
      if (showInitialOverlay) {
        setShowInitialOverlay(false);
      }
      postMessageToPlayer("playVideo");
      enterFullscreen();
  };

  const handlePause = () => {
      setIsPlaying(false);
      postMessageToPlayer("pauseVideo");
      exitFullscreen();
  };

  const handleOverlayClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // Listener para sair da tela cheia com a tecla ESC
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isPlaying) {
        handlePause();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
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
          <div ref={containerRef} className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black group">
            {/* O Iframe é renderizado sempre para poder receber comandos da API */}
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
            
            {/* Overlay permanente para capturar cliques e controlar a UI */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handleOverlayClick}
            >
              {/* Overlay inicial para o primeiro play */}
              {showInitialOverlay && (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 transition-opacity duration-300"
                >
                  <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors" />
                  <p className="mt-4 text-white text-xl font-semibold">
                    Clique no play para assistir ao vídeo
                  </p>
                </div>
              )}
              
              {/* Overlay para play/pause quando o vídeo está ativo */}
              {!showInitialOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {isPlaying ? (
                       <PauseCircle className="h-20 w-20 text-white/70" />
                    ) : (
                       <PlayCircle className="h-20 w-20 text-white/70" />
                    )}
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

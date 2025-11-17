
"use client";

import { useState, useRef, useEffect } from "react";
import { PlayCircle, X } from "lucide-react";

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentTimeRef = useRef<number>(0);

  const videoId = "AV8vBaVwvhU";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&autoplay=1&playsinline=1`;

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
    const savedTime = localStorage.getItem('vsl-current-time');
    // Se o video já terminou, começa do zero.
    const startTime = videoHasEnded ? 0 : (savedTime ? parseFloat(savedTime) : 0);

    setIsPlaying(true);
    if(videoHasEnded) {
      setVideoHasEnded(false);
    }

    setTimeout(() => {
      postMessageToPlayer("seekTo", [startTime, true]);
      postMessageToPlayer("playVideo");
    }, 150);
  };

  const handlePause = () => {
    postMessageToPlayer("getCurrentTime"); 
    postMessageToPlayer("pauseVideo");
    setIsPlaying(false);
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPlaying) {
        // Só permite fechar com ESC se o vídeo terminou
        if(videoHasEnded) {
          handlePause();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, videoHasEnded]);
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'infoDelivery') {
           if(data.info?.currentTime) {
             const newTime = data.info.currentTime;
             currentTimeRef.current = newTime;
             localStorage.setItem('vsl-current-time', newTime.toString());
           }
           // O estado 0 significa que o vídeo terminou
           if(data.info?.playerState === 0) {
              setVideoHasEnded(true);
              handlePause();
           }
        }
      } catch (error) {
        // Ignorar erros
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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

      {isPlaying && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handlePause}
        >
          {videoHasEnded && (
            <button 
              onClick={(e) => { e.stopPropagation(); handlePause(); }}
              className="absolute top-4 right-4 z-[99999] text-white/70 hover:text-white"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Fechar</span>
            </button>
          )}
          
          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 h-[20%] md:h-[30%] w-full z-[9999]" />
            <div className="absolute bottom-0 left-0 h-[20%] w-full z-[9999]" />
            
            <iframe
              ref={iframeRef}
              id="vsl-player"
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

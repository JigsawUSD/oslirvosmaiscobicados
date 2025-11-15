"use client";

import { useState, useRef, useEffect } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // YouTube video ID
  const videoId = "AV8vBaVwvhU";
  
  // YouTube Iframe URL with parameters
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}&enablejsapi=1&rel=0&showinfo=0&modestbranding=1`;

  // Function to send commands to the YouTube Iframe API
  const postMessageToPlayer = (command: string) => {
    iframeRef.current?.contentWindow?.postMessage(`{"event":"command","func":"${command}","args":""}`, "*");
  };
  
  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (showInitialOverlay) {
        setShowInitialOverlay(false);
      }
      postMessageToPlayer("playVideo");
    }
  };

  const handlePause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      postMessageToPlayer("pauseVideo");
    }
  };

  const handleOverlayClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // This effect ensures the iframe src is set only on the client
  useEffect(() => {
    if (isPlaying && iframeRef.current && !iframeRef.current.src) {
        iframeRef.current.src = videoUrl;
    }
  }, [isPlaying, videoUrl]);


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
            {/* Iframe is always present, but src is set on play */}
            <iframe
              ref={iframeRef}
              id="vsl-player"
              className="absolute top-0 left-0 w-full h-full"
              src={showInitialOverlay ? "" : videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Permanent transparent overlay to capture clicks */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handleOverlayClick}
            >
              {/* Initial Play Overlay */}
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
              
              {/* Play/Pause icon overlay when video is active */}
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

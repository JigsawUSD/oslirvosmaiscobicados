export function VslSection() {
  // Para usar seu próprio vídeo, coloque o arquivo de vídeo na pasta `public`
  // e substitua o link abaixo pelo caminho para o seu vídeo, por exemplo: "/meu-video.mp4"
  const videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

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
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              controls
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

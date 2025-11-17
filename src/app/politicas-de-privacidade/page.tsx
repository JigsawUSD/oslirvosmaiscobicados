import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PoliticasDePrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <div className="container max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
            Política de Privacidade
          </h1>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              A sua privacidade é importante para nós. É política do
              LivrosMaisCobiçados respeitar a sua privacidade em relação a
              qualquer informação sua que possamos coletar no site{" "}
              <a href="/">LivrosMaisCobiçados</a>, e outros sites que possuímos e
              operamos.
            </p>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos
              delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
              legais, com o seu conhecimento e consentimento. Também informamos
              por que estamos coletando e como será usado.
            </p>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. Quando armazenamos dados,
              protegemos dentro de meios comercialmente aceitáveis para evitar
              perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>
            <p>
              Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p>
              O nosso site pode ter links para sites externos que não são
              operados por nós. Esteja ciente de que não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar
              responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p>
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez не possamos fornecer alguns dos
              serviços desejados.
            </p>
            <p>
              O uso continuado de nosso site será considerado como aceitação de
              nossas práticas em torno de privacidade e informações pessoais. Se
              você tiver alguma dúvida sobre como lidamos com dados do usuário e
              informações pessoais, entre em contato conosco.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Política de Cookies LivrosMaisCobiçados</h2>
            <h3 className="text-lg font-semibold text-foreground">O que são cookies?</h3>
            <p>
              Como é prática comum em quase todos os sites profissionais, este
              site usa cookies, que são pequenos arquivos baixados no seu
              computador, para melhorar sua experiência. Esta página descreve
              quais informações eles coletam, como as usamos e por que às vezes
              precisamos armazenar esses cookies. Também compartilharemos como
              você pode impedir que esses cookies sejam armazenados, no entanto,
              isso pode fazer o downgrade ou 'quebrar' certos elementos da
              funcionalidade do site.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Como usamos os cookies?</h3>
            <p>
              Utilizamos cookies por vários motivos, detalhados abaixo.
              Infelizmente, na maioria dos casos, não existem opções padrão do
              setor para desativar os cookies sem desativar completamente a
              funcionalidade e os recursos que eles adicionam a este site. É
              recomendável que você deixe todos os cookies se não tiver certeza
              se precisa ou não deles, caso sejam usados para fornecer um serviço
              que você usa.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Desativar cookies</h3>
            <p>
              Você pode impedir a configuração de cookies ajustando as
              configurações do seu navegador (consulte a Ajuda do navegador para
              saber como fazer isso). Esteja ciente de que a desativação de
              cookies afetará a funcionalidade deste e de muitos outros sites que
              você visita. A desativação de cookies geralmente resultará na
              desativação de determinadas funcionalidades e recursos deste site.
              Portanto, é recomendável que você não desative os cookies.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Mais informações</h3>
            <p>
              Esperemos que esteja esclarecido e, como mencionado anteriormente,
              se houver algo que você não tem certeza se precisa ou não,
              geralmente é mais seguro deixar os cookies ativados, caso interaja
              com um dos recursos que você usa em nosso site.
            </p>
            <p>
              Esta política é efetiva a partir de{" "}
              <strong>{new Date().toLocaleDateString('pt-BR')}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

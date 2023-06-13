import ContactBar from "../../components/site/ContactBar";

const Home = () => {
  return (
    <main className="container max-w-screen-lg mx-auto h-full p-2 border border-t-0">
      <ContactBar />
      <div className="border-b">
        <h2>Como pensamos sobre nossos produtos</h2>
        <div className="my-2 flex flex-col flex-wrap sm:flex-nowrap sm:flex-row justify-between items-center">
          <p className="flex-wrap">{textAboutProducts}</p>
          <img
            className="w-64 "
            src="../../public/img/alien_science.svg"
            alt=""
          />
        </div>
      </div>

      <div className="border-b">
        <h2>Como atuamos na entrega dos produtos</h2>
        <div className="my-2 flex flex-col flex-wrap sm:flex-nowrap sm:flex-row justify-between items-center">
          <img
            className="w-80"
            src="../../public/img/delivery_truck.svg"
            alt=""
          />
          <p>{textAboutDelivery}</p>
        </div>
      </div>
      <div className="my-3 flex flex-col flex-wrap sm:flex-nowrap justify-center items-center">
        produtos em destaques
        <h3>prod1</h3>
        <h3>prod2</h3>
        <h3>prod3</h3>
        <h3>prod4</h3>
      </div>

      <div className="my-3 flex flex-col flex-wrap sm:flex-nowrap justify-center items-center">
        <h2>NEWS LETTER</h2>
      </div>
    </main>
  );
};

const textAboutProducts = `Na nossa empresa, a valorização da qualidade do nosso produto é um dos
princípios fundamentais que norteiam todas as nossas atividades.
Reconhecemos que a excelência e a satisfação do cliente são essenciais para o
sucesso do nosso negócio, e é por isso que dedicamos recursos significativos
para garantir que nossos produtos atendam aos mais altos padrões de qualidade.
Nossa dedicação à qualidade se reflete não apenas na excelência do produto em si, mas também no
atendimento ao cliente. Nossa equipe de suporte está pronta para ajudar em todas as etapas,
fornecendo orientações e solucionando quaisquer dúvidas ou problemas que possam surgir. Acreditamos
que um relacionamento próximo com nossos clientes é essencial para construir confiança e fidelidade.`;

const textAboutDelivery = `Nosso compromisso com a entrega dos produtos é uma prioridade em nossa empresa. Reconhecemos a importância de cumprir prazos e garantir que nossos clientes recebam seus pedidos de forma pontual e eficiente. Nosso objetivo é proporcionar uma experiência de compra tranquila e satisfatória, desde o momento em que o pedido é realizado até a entrega final.
A transparência e a comunicação aberta são elementos-chave em nosso compromisso de entrega. Mantemos nossos clientes informados sobre o status de seus pedidos, fornecendo atualizações regulares sobre o processo de produção e logística. Caso surjam imprevistos ou atrasos, nos esforçamos para notificar os clientes o mais rápido possível e trabalhar em conjunto para encontrar soluções adequadas.`;

export default Home;

import foto from "../assets/at.ls.300.png";

export const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col items-center w-[200px]">
      <img
        className="brightness-125 drop-shadow-sm"
        src={foto}
        width={150}
        alt="img"
      />
      <span
        className="m-3 uppercase font-ubuntu text-2xl
      antialiased hover:subpixel-antialiased
      font-medium text-stone-900"
      >
        ATIVADO LS
      </span>
      <span className="text-sm text-gray-500 text-normal font-sans">
        Descricao
      </span>
      <p className="border text-xs indent-2 antialiased font-montserrat p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        repudiandae, atque quo reprehenderit ut iure incidunt optio iusto
        officia consequuntur? Este produto foi indicado para limpesa de baus e
        similares
      </p>
      <div className="flex gap-1 flex-wrap justify-center mt-4">
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          automotivo
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          roxo
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          motor
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          limpeza
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          clean
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          santana
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm"
        >
          amarelo
        </span>
      </div>
    </div>
  );
};

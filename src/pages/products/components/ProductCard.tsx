import foto from "../../../_assets/at.ls.300.png";
import { DescriptionDetails } from "./DescriptionDetails";

interface IProduct {
  description: string;
  detailedProductDescription: string;
}

export const ProductCard = (props: IProduct) => {
  const { description, detailedProductDescription } = props;

  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col items-center w-[120px] sm:w-[200px]  relative">
      <img
        className="brightness-125 drop-shadow-sm"
        src={foto}
        width={150}
        alt="img"
      />
      <span
        className="text-stone-900 block font-ubuntu text-xl font-semibold leading-snug tracking-normal text-inherit antialiased
       text-center hover:subpixel-antialiased m-2 uppercase"
      >
        {description}
      </span>

      {/* detailed description */}
      {detailedProductDescription !== "" ? (
        <DescriptionDetails description={detailedProductDescription} />
      ) : null}

      {/* tags div */}
      <div
        className="flex gap-1 flex-wrap
      mt-4 p-0 place-items-end justify-items-end items-end"
      >
        <span className="rounded-lg bg-orange-500 px-3 py-2 text-xs transition duration-200 dark:bg-orange-400">
          automotivo
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm transition duration-300 hover:bg-red-600 hover:text-slate-200"
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
        font-robotomono p-1 antialiased shadow-sm self-end"
        >
          clean
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 antialiased shadow-sm self-end"
        >
          santana
        </span>
        <span
          className="text-xs rounded bg-red-500 text-white
        font-robotomono p-1 m-0 antialiased shadow-sm self-end"
        >
          amarelo
        </span>
      </div>
    </div>
  );
};

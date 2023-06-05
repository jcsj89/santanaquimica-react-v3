import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { Spinner } from "../../components/ui/Spinner";

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

const ListProducts = (props: { produtos: Product[] }) => {
  // function render table
  const renderProducts = () => {
    if (props.produtos.length > 0) {
      return (
        <table className="table-auto font-ubuntu hover:table-fixed border-collapse border border-slate-900">
          <caption className="caption-bottom">
            Tabela de produtos cadastrados.
          </caption>
          <thead className="text-xl lg:text-2xl">
            <tr>
              <th className="border border-slate-700 px-2 ">Descricao</th>
              <th className="border border-slate-700 px-2">Estoque</th>
              <th className="border border-slate-700 px-2">Color</th>
              <th className="border border-slate-700 px-2">Mostravel</th>
              <th className="border border-slate-700 px-2">Ativo</th>
              <th className="border border-slate-700 px-2">Editar</th>
              <th className="border border-slate-700 px-2">Excluir</th>
            </tr>
          </thead>
          <tbody className="text-xl lg:text-2xl">
            {props.produtos.map((item) => {
              return (
                <>
                  <tr className="items-center ">
                    <td className="border border-slate-400 p-2">
                      {item.description}
                    </td>
                    <td className="border border-slate-400 p-2">
                      {item.detailedProductDescription}
                    </td>
                    <td className="border border-slate-400 p-2 ">
                      {item.showInWeb ? (
                        <MdOutlineVisibility className="text-green-700 mx-auto" />
                      ) : (
                        <MdOutlineVisibilityOff className="text-red-700 mx-auto" />
                      )}
                    </td>
                    <td className="border border-slate-400 px-2 ">
                      <MdOutlineEdit className="text-sky-800 mx-auto" />
                    </td>
                    <td className="border border-slate-400 px-2 ">
                      <MdOutlineDelete className="text-orange-600 mx-auto" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <div>Nao contem dados na tabela.</div>;
    }
  };

  if (!props.produtos) {
    return (
      <div className="flex mx-auto justify-center items-center align-middle min-h-[200px] my-10">
        <Spinner /> Carregando...
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap gap-3 justify-center border p-5 w-full">
        {renderProducts()}
      </div>
    );
  }
};

export default ListProducts;

// const useCadastrar = (e: any) => {
//   e.preventDefault();
//   const teste = usePost("/products", {
//     description: "sanq teste",
//     detailedProductDescription: "",
//     price: 1200,
//     priceUnit: 990,
//     freeWeight: 50,
//     grossWeight: 60,
//     discountPercent: 30,
//     discountValue: "15",
//     color: "roxo",
//     codeEAN: "1231231",
//     validity: "02 anos",
//     brand: "santana",
//     producer: "",
//     cost: 111,
//     inventory: 10,
//     inventoryCost: 1000,
//     size: "'20'",
//     codeProd: "1",
//     codeNCM: "",
//     density: 1.7,
//     embalagem_id: "",
//   });
//   console.log(teste);
// };

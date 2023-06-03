import { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import { Spinner } from "../../ui/Spinner";

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

const ListProducts = () => {
  // const produtos = useData("/products");
  const [produtos, setProdutos] = useState<Product[]>([]);

  const { sendHttpRequest, loading, statusCode, error, statusText } = useHttp();

  // const produtos = useGet({ url: "/products", start: true });

  useEffect(() => {
    sendHttpRequest({
      url: "/products",
      method: "GET",
      action: onGet,
    });
  }, []);

  const onGet = (data: Product[]) => {
    setProdutos(data);
  };

  const renderProducts = () => {
    if (produtos.length > 0 && !loading) {
      return (
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-500 px-2">Descricao</th>
              <th className="border border-slate-500 px-2">Preco</th>
              <th className="border border-slate-500 px-2">Ativo</th>
              <th className="border border-slate-500 px-2">Editar</th>
              <th className="border border-slate-500 px-2">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return <div>nao certo</div>;
    }
  };

  if (loading) {
    return (
      <div className="flex mx-auto justify-center items-center align-middle min-h-[200px] my-10">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {error ? (
          <div className="flex mx-auto justify-center items-center align-middle min-h-[200px] my-10">
            <Spinner />
          </div>
        ) : (
          renderProducts()
        )}
      </div>
    </>
  );
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
//     density: 1.5,
//     embalagem_id: "",
//   });
//   console.log(teste);
// };

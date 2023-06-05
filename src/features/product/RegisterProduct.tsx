import { useState } from "react";
import { InputForm } from "../../components/ui/InputForm";
import { Spinner } from "../../components/ui/Spinner";
import { useHttp } from "../../hooks/useHttp";
import ContentTitle from "../dashboard/components/ContentTitle";
// import { usePost } from "../../../hooks/useFetch";
//   codeProd: string; // unique
//   description: string;
//   color: string; //

//   brand: string; // marca
//   producer: string; // fabricante
//   size: string;

//   showInWeb: boolean;
//   active: boolean;
//   detailedProductDescription: string;

//   codeNCM: string;
//   codeEAN: string; // codigo de barras
//   validity: string; // validade

//   price: number; // preco do produto
//   priceUnit: number; //
//   discountValue: number; // desconto no preco
//   discountPercent: number; // desconto no preco
//   cost: number; // custo do produto - necessario realizar calculo pela formula
//   inventory: number; // qtd estoque do produto
//   inventoryCost: number; // custo do estoque de produto
//   density: number; // densidade do produto
//   freeWeight: number; // peso liquido
//   grossWeight: number; // peso bruto
//   // FUTURE RELS
//   // RELATIONSHIPS
//   // tags relacionadas ao produto
//   embalagem_id: string; // tabela N:1 embalagens de venda
//   //
//   category?: string[]; // N:N - categoria do produto - outra tabela
//   tags?: string[]; // N:N - tabela externa ou string separada por virgula
//   documents?: string[]; // 1:N na tabela documents deve ter o id do produto
//   //deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
//   photos?: string[]; // tabela 1:N

export const RegisterProduct = () => {
  // Fetch data
  const { sendHttpRequest, loading, statusCode, error, statusText } = useHttp();
  // states
  const [description, setDescription] = useState("");
  const [codeProd, setCodeProd] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [producer, setProducer] = useState("");
  const [detailedProductDescription, setdetailedProductDescription] =
    useState("");
  //
  const [response, setResponse] = useState<any>();

  function onCreate(data: any) {
    setResponse(data);
  }

  const handleClick = async (e: any) => {
    e.preventDefault();

    const bodyData = {
      description,
      codeProd,
      color,
      brand,
      detailedProductDescription,
    };

    const data = sendHttpRequest({
      url: "/products",
      method: "POST",
      bodyData,
      action: onCreate,
    });

    // console.log(data);
  };

  return (
    <>
      <ContentTitle title="Novo Registro de Produto" />
      {!loading ? console.log(response) : null}
      <form action="POST">
        <div className="flex flex-col flex-wrap border  m-5 p-5">
          <div className="flex m-1">
            <label htmlFor="codeProd" className="text-sm">
              Codigo:
            </label>
            <InputForm
              type="text"
              name="codeProd"
              value={codeProd}
              onChange={(e) => setCodeProd(e.target.value)}
            />

            <label htmlFor="description" className="text-sm">
              Descricao:
            </label>
            <InputForm
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="description" className="text-sm">
              Cor:
            </label>
            <InputForm
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="flex m-1">
            <label htmlFor="description" className="text-sm">
              Marca:
            </label>
            <InputForm
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <label htmlFor="description" className="text-sm">
              Fabricante:
            </label>
            <InputForm
              type="text"
              name="producer"
              value={producer}
              onChange={(e) => setProducer(e.target.value)}
            />
          </div>

          <div className="flex m-1">
            <label htmlFor="description" className="text-sm">
              Descricao detalhada:
            </label>
            <textarea
              name="detailedProductDescription"
              className="enabled:hover:border-gray-400 disabled:opacity-75 border"
              value={detailedProductDescription}
              onChange={(e) => setdetailedProductDescription(e.target.value)}
            />
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <button onClick={handleClick}>Cadastrar</button>
        )}
      </form>
    </>
  );
};

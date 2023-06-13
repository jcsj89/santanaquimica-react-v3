import { useEffect, useState } from "react";

// import { useGet } from "../../hooks/useFetch";
import { Spinner } from "../../components/ui/Spinner";
import { useHttp } from "../../hooks/useHttp";
import { ProductCard } from "./components/ProductCard";

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

const Products = () => {
  // const produtos = useData("/products");
  const [produtos, setProdutos] = useState<Product[]>([]);

  const { sendHttpRequest, loading, error } = useHttp();

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
      return produtos.map((item) => {
        return (
          <ProductCard
            description={item.description}
            detailedProductDescription={item.detailedProductDescription}
          />
        );
      });
    } else {
      return (
        <ProductCard
          description="produto number 1"
          detailedProductDescription="Descricao do produto teste"
        />
      );
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
    <div className="container max-w-screen-lg mx-auto h-full p-2 border">
      <div className="flex flex-wrap gap-3 justify-center">
        {error ? (
          <div className="flex mx-auto justify-center items-center align-middle min-h-[200px] my-10">
            <Spinner />
          </div>
        ) : (
          renderProducts()
        )}
      </div>
    </div>
  );
};

export default Products;

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

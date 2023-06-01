import { useEffect, useState } from "react";
import { ProductCard } from "../../components/product/ProductCard";
import { Spinner } from "../../components/ui/Spinner";
// import { useGet } from "../../hooks/useFetch";
import { useHttp } from "../../hooks/useHttp";

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

const Products = () => {
  // const produtos = useData("/products");
  const [produtos, setProdutos] = useState<Product[]>([]);

  const fetchHttp = useHttp();

  // const produtos = useGet({ url: "/products", start: true });

  useEffect(() => {
    // setProdutos(produtos)

    fetchHttp.sendHttpRequest({
      url: "/products",
      method: "GET",
      action: onGet,
    });
  }, []);

  const onGet = (data: Product[]) => {
    setProdutos(data);
  };

  const renderProducts = () => {
    if (produtos.length > 0 && !fetchHttp.loading) {
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

  if (fetchHttp.loading) {
    return (
      <div className="flex mx-auto justify-center items-center align-middle min-h-[200px] my-10">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center m-8 border">
        <button>Cadastrar teste</button>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {fetchHttp.loading ? (
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

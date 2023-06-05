import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/ui/Spinner";
import { useHttp } from "../../hooks/useHttp";
import ContentTitle from "../dashboard/components/ContentTitle";
import { InformationBox } from "./InformationBox";
import ListProducts from "./ListProducts";

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

export const DashboardProducts = () => {
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
  return (
    <section className="flex flex-col">
      <ContentTitle title="Produtos Cadastrados" />
      <div className="flex gap-3 flex-wrap ">
        <InformationBox
          name="Cadastrados"
          description="Existem cadastrados tantos"
          color=""
          valor={123}
        />
        <InformationBox
          name="Tags"
          description="10 tags mais utilizadas"
          color=""
          valor="roxo automotivo"
        />
      </div>
      <h2 className="text-2xl font-roboto my-2">Tabela de Produtos</h2>
      <nav className="my-2">
        <div
          className="rounded-lg border  p-2 text-center
        text-blue-700 font-bold hover:text-zinc-600 hover:transition hover:ease-in-out"
        >
          <Link to="/dashboard/produtos/registrar">Cadastrar Produto</Link>
        </div>
      </nav>
      {loading ? <Spinner /> : <ListProducts produtos={produtos} />}
    </section>
  );
};

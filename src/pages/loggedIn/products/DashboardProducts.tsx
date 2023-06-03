import { InformationBox } from "../../../components/dashboard/products/InformationBox";
import ListProducts from "../../../components/dashboard/products/ListProducts";

export const DashboardProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-6 flex-wrap ">
        <InformationBox
          name="Cadastrados"
          description="Existem cadastrados tantos"
          color=""
          valor={123}
        />
        <InformationBox
          name="Quantidade"
          description="Existem cadastrados tantos"
          color=""
          valor={123}
        />
        <InformationBox
          name="Quantidade"
          description="Existem cadastrados tantos"
          color=""
          valor={123}
        />
      </div>
      <h1>Produtos</h1>

      <ListProducts />
    </div>
  );
};

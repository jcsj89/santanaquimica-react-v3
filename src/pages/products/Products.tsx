import { ProductCard } from "../../components/ProductCard";
import { useData } from "../../hooks/useData";

const Products = () => {
  const produtos = useData("/products");
  console.log(produtos.data);
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <table>
        <thead>
          <tr>
            <th>nome</th>
            <th>preco</th>
            <th>descricao</th>
            <th>ok</th>
          </tr>
        </thead>
        <tbody>
          {produtos && !produtos.isLoading ? (
            produtos!.data.map((p) => (
              <tr>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.price}</td>
                <td>{p.active}</td>
              </tr>
            ))
          ) : (
            <p>ja foi</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Products;

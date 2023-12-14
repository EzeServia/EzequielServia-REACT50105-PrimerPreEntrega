import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useAllProducts } from "../hook/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { products, loading, error } = useAllProducts();

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
export default Home;

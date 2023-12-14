import React from "react";
import { useAllProductsByCategory } from "../hook/useProducts";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByCategory(categoryId);

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
export default Category;

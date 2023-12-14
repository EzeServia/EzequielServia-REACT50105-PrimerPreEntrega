import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hook/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Item = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct(productId);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetailContainer products={product} />
      )}
    </div>
  );
};
export default Item;

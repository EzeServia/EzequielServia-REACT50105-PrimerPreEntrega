import React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hook/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Item = () => {
  const { id } = useParams();

  const { product, loading, error } = useSingleProduct(id);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};
export default Item;

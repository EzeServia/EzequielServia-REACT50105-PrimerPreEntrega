import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
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
        <ItemDetailContainer product={product} />
      )}
    </div>
  );
};
export default Item;

/*import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";

const ItemDetail = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct(productId);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetailContainer products={products} />
      )}
    </div>
  );
};
export default ItemDetail;*/

import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { ProductsData } from "../../services/data/ProductsData";
import { useParams } from "react-router-dom";
const ItemCall = () => {
  const { id } = useParams();

  const productFiltered = ProductsData.filter(
    (product) => product.id === parseInt(id)
  );

  return <ItemDetailContainer product={productFiltered[0]} />;
};

export default ItemCall;

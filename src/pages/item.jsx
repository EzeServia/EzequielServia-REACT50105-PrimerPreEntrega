import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../services/data/ProductsData";

const Item = () => {
  const { id } = useParams();

  const productFiltered = ProductsData.filter(
    (product) => product.id === parseInt(id)
  );
  console.log(productFiltered);
  return <ItemDetailContainer product={productFiltered[0]} />;
};

export default Item;

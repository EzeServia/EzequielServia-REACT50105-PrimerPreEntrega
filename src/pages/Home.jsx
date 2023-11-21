import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { ProductsData } from "../services/data/ProductsData";

const Home = () => {
  return <ItemListContainer products={ProductsData} />;
};
export default Home;

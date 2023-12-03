import { React, useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { fetchProducts, ProductsData } from "../services/data/ProductsData";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <LoaderComponent></LoaderComponent>
        </div>
      ) : (
        <div>
          <ItemListContainer products={ProductsData}></ItemListContainer>
        </div>
      )}
    </div>
  );
};

export default Home;

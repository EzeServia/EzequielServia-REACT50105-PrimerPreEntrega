import { React, useState, useEffect } from "react";

import { fetchProducts } from "../services/data/ProductsData"; // Asegúrate de importar ProductsData

import CategoryComponent from "../components/CategoryComponent/CategoryComponent";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
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
          <CategoryComponent></CategoryComponent>
        </div>
      )}
    </div>
  );
};

export default Category;

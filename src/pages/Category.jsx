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

/*import { React, useState, useEffect } from "react";
import { fetchProducts } from "../services/data/ProductsData"; // Asegúrate de importar ProductsData
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        const prodFiltered =
          categoryId && data.filter((elem) => elem.category === categoryId);
        setProducts(prodFiltered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};

export default Category;*/

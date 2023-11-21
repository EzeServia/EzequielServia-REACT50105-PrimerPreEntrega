import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../services/data/ProductsData";
import { useEffect, useState } from "react";
const Category = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    setFilteredProducts(
      ProductsData.filter((product) => product.category === categoryId)
    );
  }, [categoryId]);

  return <ItemListContainer products={filteredProducts} />;
};

export default Category;

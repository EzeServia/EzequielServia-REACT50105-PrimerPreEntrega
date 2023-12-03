import { useEffect, useState } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../services/data/ProductsData";

const CategoryComponent = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    setFilteredProducts(
      ProductsData.filter((product) => product.category === categoryId)
    );
  }, [categoryId]);

  return <ItemListContainer products={filteredProducts} />;
};

export default CategoryComponent;

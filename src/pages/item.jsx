import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { useParams } from "react-router-dom";
import { ProductsData } from "../services/data/ProductsData";

export const Loading = () => {
  const [loadProducts, setLoadProducts] = useState(true);
  useEffect(() => {
    // Simular una demora de 5 segundos
    const delay = setTimeout(() => {
      // Después de la demora, cambia el estado para indicar que la carga ha terminado
      setLoadProducts(false);
    }, 5000);
    return () => clearTimeout(delay);
  }, []);
  return (
    <div>
      {loadProducts ? (
        // Muestra el componente LoaderComponent mientras loadProducts es true
        <LoaderComponent />
      ) : (
        // Muestra el contenido deseado después de la carga
        { Item }
      )}
    </div>
  );
};

const Item = () => {
  const { id } = useParams();

  const productFiltered = ProductsData.filter(
    (product) => product.id === parseInt(id)
  );
  console.log(productFiltered);
  return <ItemDetailContainer product={productFiltered[0]} />;
};

export default Item;

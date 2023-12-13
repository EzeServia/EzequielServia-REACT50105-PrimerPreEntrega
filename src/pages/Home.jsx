import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useAllProducts } from "../hook/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { products, loading, error } = useAllProducts();

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
export default Home;
/*  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => SetError(true))
      .finally(() => setLoading(false));
  }, []);

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

export default Home;
*/

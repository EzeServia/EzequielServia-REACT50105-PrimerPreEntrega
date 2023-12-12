import { React, useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const Home = () => {
  const [products, setProducts] = useState([]);
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

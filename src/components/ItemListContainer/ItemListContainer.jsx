import "./ItemListConteiner.css";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        backgroundColor: "#9c75b2",
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "start",
      }}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{
              backgroundColor: "#9c75b2",
              width: "18rem",
              margin: 20,
              borderColor: "white",
            }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.Text}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ItemListContainer;

import React from "react";
import { Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
const ItemDetailContainer = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(cantidad);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}>
      <Card
        key={product.id}
        style={{ width: "18rem", margin: 20, height: "500px" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <ItemCount onAdd={onAdd} />
      </Card>
    </div>
  );
};

export default ItemDetailContainer;

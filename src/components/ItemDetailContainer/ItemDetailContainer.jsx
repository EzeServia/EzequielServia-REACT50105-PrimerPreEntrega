import React from "react";
import { Card } from "react-bootstrap";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "lightpink",
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}>
      <Card
        key={product.id}
        style={{
          backgroundColor: "#BB8FCE",
          width: "18rem",
          margin: 20,
          height: "500px",
        }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
      </Card>
    </div>
  );
};

export default ItemDetailContainer;

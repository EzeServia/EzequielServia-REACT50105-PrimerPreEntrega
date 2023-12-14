import React from "react";
import { AddItemButton } from "../AddItemButton/AddItemButton";
import "./ItemCount.css";

export const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleResetQuantity = () => {
    setQuantity(1);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleSubstractProduct}>
        -
      </button>
      <input type="number" value={quantity} disabled />
      <button className="button" onClick={handleAddProduct}>
        +
      </button>
      <AddItemButton
        quantity={quantity}
        handleResetQuantity={handleResetQuantity}
      />
    </div>
  );
};

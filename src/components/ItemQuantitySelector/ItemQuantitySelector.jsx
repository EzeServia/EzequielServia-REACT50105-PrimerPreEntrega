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
    <div>
      <button onClick={handleSubstractProduct}>-</button>
      <input type="number" value={quantity} disabled />
      <button onClick={handleAddProduct}>+</button>
      <AddItemButton
        quantity={quantity}
        handleResetQuantity={handleResetQuantity}
      />
    </div>
  );
};

/*import React from "react";
import "./ItemCount.css";

export const ItemCount = ({ onAdd }) => {
  //Esto crea un estado llamado 'count'
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="container1">
        <button className="button" onClick={handleRemove}>
          - 1
        </button>
        <h4>{count}</h4>
        <button className="button" onClick={handleAdd}>
          + 1
        </button>
      </div>
      <div className="container2">
        <button className="button" onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};*/

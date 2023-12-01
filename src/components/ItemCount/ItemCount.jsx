import React from "react";
import "./ItemCount.css";

export const ItemCount = () => {
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
        <button className="button">Agregar al Carrito</button>
      </div>
    </div>
  );
};

import React from "react";
import "./CartWidgetComponent.css";
import { CartContext } from "../../context/CartContext";
const CartWidgetComponent = () => {
  const { itemCount } = React.useContext(CartContext);
  return (
    <div className="flexComponent">
      <img
        className="carrito"
        src="\src\components\CartWidgetComponent\imagen\carrito.png"
        alt="Imagen de carrito de compras"
      />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidgetComponent;

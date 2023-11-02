import "./CartWidgetComponent.css";
const CartWidgetComponent = () => {
  return (
    <div className="flexComponent">
      <img
        className="carrito"
        src="\src\components\assets\imagen\carrito.png"
        alt="Imagen de carrito de compras"
      />
      <span>10</span>
    </div>
  );
};

export default CartWidgetComponent;

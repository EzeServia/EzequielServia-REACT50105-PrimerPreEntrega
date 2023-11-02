import "./ItemListConteiner.css";
const ItemListConteiner = ({ greeting }) => {
  return (
    <div>
      <section className="fondo">
        <h1>{greeting}</h1>
      </section>
    </div>
  );
};

export default ItemListConteiner;

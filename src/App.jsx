import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navbarComponents/NavbarComponent";
import CartWidgetComponent from "./components/CartWidgetComponent/CartWidgetComponent";
import ItemListConteiner from "./components/ItemListContainer/ItemListConteiner";
import "./App.css";
function App() {
  return (
    <div className="fondo">
      <NavBarComponent />
      <ItemListConteiner greeting={"Es hora de Brillar"} />
    </div>
  );
}

export default App;

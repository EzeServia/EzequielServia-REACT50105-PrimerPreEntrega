import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navbarComponents/NavbarComponent";
import CartWidgetComponent from "./components/CartWidgetComponent/CartWidgetComponent";
import ItemListConteiner from "./components/ItemListContainer/ItemListConteiner";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListConteiner greeting={"¡Es hora de Brillar!"} />
    </div>
  );
}

export default App;

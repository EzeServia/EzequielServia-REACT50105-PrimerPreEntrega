import imagen1 from "./image/combo3.jpg";
import imagen2 from "./image/combo2.jpg";
import imagen3 from "./image/shampoo.jpg";
import imagen4 from "./image/rosababy.webp";
import imagen5 from "./image/violeta402.webp";
import imagen6 from "./image/rojo40.webp";

const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ProductsData);
    }, 2000); // Simulamos un tiempo de carga de 2000 milisegundos (2 segundos)
  });
};

export { fetchProducts };

export const ProductsData = [
  {
    id: 1,
    title: "Tónico, emulsión y Protector",
    price: 7500,
    category: "Balsamos",
    image: imagen1,
    description: "Kit de glitters autoadhesivos decorativos para el rostro",
    text: "Combo refrescante para el skincare antes de dormir",
  },
  {
    id: 2,
    title: "Tónico y Emulsión",
    price: 7500,
    category: "Balsamos",
    image: imagen2,
    description: "Kit de glitters autoadhesivos decorativos para el rostro",
  },
  {
    id: 3,
    title: "Shampoo Corporal",
    price: 7500,
    category: "Shampoos",
    image: imagen3,
    description: "Kit de glitters autoadhesivos decorativos para el rostro",
  },
  {
    id: 4,
    title: "Rosa Barbie",
    price: 2500,
    category: "Brillos",
    image: imagen4,
    description: "Glitter brillo en gel decorativos para el cuerpo y rostro",
  },
  {
    id: 5,
    title: "Violeta",
    price: 2500,
    image: imagen5,
    category: "Brillos",
    description: "Glitter brillo en gel decorativos para el cuerpo y rostro",
  },
  {
    id: 6,
    title: "Rojo",
    price: 2500,
    image: imagen6,
    category: "Brillos",
  },
];

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import CartProvider from "./components/Contexts/CartContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return <>
  <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:name" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>   
    </BrowserRouter>
  </CartProvider>
  </>
}

export default App;

/* Para el desafio tienen que:

-Crear el cartContext
-Crear una lógica para que al darle click a añadir en itemdetail (itemcount) se añada en un array, un objeto con la información del producto (nombre, cantidad, precio)
-Crear una función que no admita los duplicados (que si ya hay ese producto en el array no se vuelva añadir sino que se sume la cantidad)
 */
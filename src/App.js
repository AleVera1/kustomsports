import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/categoria/:name" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  </>
}

export default App;

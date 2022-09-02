import React from 'react';
import './index.css';
import NavBar from "./components/NavBar/NavBar"
/* import ItemListContainer from "./components/ItemListContainer/ItemListContainer" */
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer />
    </div>
  )
}

export default App;

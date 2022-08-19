import React from 'react';
import './index.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a KustomSports" />
      </div>
    )
  }
}

export default App;

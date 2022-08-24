import "./ItemListContainer.scss"
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ( { greeting, stock, initial, onAdd } ) => {
  return (
    <section className="item-list-container">
      <p>{greeting}</p>
      <section className="products-container">
        <ItemCount stock="5" initial= '1' onAdd={onAdd} />
      </section>
    </section>
  )
}

export default ItemListContainer;
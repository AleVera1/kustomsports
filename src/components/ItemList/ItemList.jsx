import Item from '../Item/Item';

const ItemList = ({ items, loading }) => {
  const displayProducts = () => {
    if(loading) {
      return items.map( (item, index) => <Item item={item} key={index} />)
    }
    else {
      return <div className="loader">Loading...</div>
    }
  }
  return displayProducts()
}

export default ItemList;

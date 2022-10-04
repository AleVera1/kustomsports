import './ItemCount.scss'

const ItemCount = ({stock, initial, onAdd, item, setAddedProduct, count, setCount}) => {
  const changeQuantity = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    } else if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  }

  return ( 
    <div className='product-quantity-container'>
      <div className='product-quantity'>
        <button onClick={() => changeQuantity("-")}>-</button>
        <p>{count}</p>
        <button onClick={() => changeQuantity("+")}>+</button>
      </div>
      <p className='product-stock'>Stock disponible: {stock}</p>
      <div className='pdp-buy'>
      {stock > 0 ? <button 
        onClick={() => {
          onAdd(item, count)
          setAddedProduct(true)
        }}>
          AGREGAR AL CARRITO
      </button> :
      <div>NO HAY STOCK</div>}
      </div>
    </div>
  )
}

export default ItemCount;
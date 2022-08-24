import './ItemCount.scss'
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));

  const changeQuantity = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    } else if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  }

  return ( 
    <div className='product-cards'>
      <p className='product-title'>Zapatillas Adidas Alphaboost</p>
      <div className='product-quantity'>
        <button onClick={() => changeQuantity("-")}>-</button>
        <p>{count}</p>
        <button onClick={() => changeQuantity("+")}>+</button>
      </div>
      <p className='product-stock'>Stock disponible: {stock}</p>
      <button onClick={() => onAdd(count)} className='add-to-cart'>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default ItemCount;
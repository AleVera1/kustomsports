import "./CartWidget.scss"
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <>
    {cartItems.length > 0 && 
      <Link className="cart-link" to={"/cart"}>
      <div className='cart'>
        <div className='cart-icon'>
          <span className='cart-counter'>{cartItems.length}</span>
        </div>
        Carrito
      </div>
      </Link>}
    </>
  )
}

export default CartWidget;
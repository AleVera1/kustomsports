import React, { useContext, useEffect, useState} from 'react'
import {CartContext} from '../Contexts/CartContext'
import { Link } from 'react-router-dom';
import './Cart.scss'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartItems, total, removeItem, clear} = useContext(CartContext)

  useEffect(() => {
    setTotalPrice(total())
  }, [cartItems])

  return ( 
    <section className='cart-container'>
      <div className='cart-leftside'>
        <table>
          <thead>
            <tr>
              <th className='cart-table-title' colSpan={2}>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((product, index) => (
                <tr key={index}>
                  <td className='cart-product-img'>
                    <div className="cart-img-container">
                      <img src={product.item.pictureUrl} alt={product.item.title} />
                    </div>
                  </td>
                  <td className='cart-product-name'>{product.item.title}</td>
                  <td>${product.item.price}</td>
                  <td>{product.count}</td>
                  <td>${product.item.price * product.count}</td>
                  <td><div onClick={() => removeItem(product.item.id, product.count)}><img src="assets/icons/trash-icon.svg" alt="Eliminar producto" /></div></td>
                </tr>
              ))
            ) : (
              <>
                <tr className='empty-cart'>
                  <td colSpan={6}>Carrito vacio.</td>
                </tr>
                <tr className='go-back-btn'><td colSpan={6}><Link to="/">Volver</Link></td></tr>
              </>
            )}
          </tbody>
        </table>
        {cartItems.length > 0 && <div onClick={() => clear()} className="clear-cart">Vaciar carrito</div>}
      </div>
      <div className='cart-rightside'>
        <h3>Resúmen</h3>
        <p className="cart-subtotal">
            <span className="cart-subtotal-title">Subtotal</span>
            <span className="cart-subtotal-value">${totalPrice}</span>
        </p>
        <p className="cart-total">
          <span className="cart-total-title">Total</span>
          <span className="cart-total-value">${totalPrice}</span>
        </p>
        <button className="buy-btn" type="button">COMPRAR</button>
      </div>
    </section> 
  );
}

export default Cart;
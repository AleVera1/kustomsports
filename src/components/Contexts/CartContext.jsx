import React, { createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    isInCart()
  }, [cartItems])

  const isInCart = (itemId) => {
    let itemIndex = -1
    let quantity = 1
    let isIn = false 

    cartItems.forEach((e, index) => {
      if(e.item.id === itemId) {
        itemIndex = index
        quantity = e.count
        isIn = true
      }
    })
    return [isIn, quantity, itemIndex]
  }

  const addItem = (item, qty) => {
    const [isIn, quantity, itemIndex] = isInCart(item.id)
    let count = qty

    if (isIn === true) {
      count = count + quantity
      setCartItems(cartItems.splice(itemIndex, 1))
    }
    setCartItems([...cartItems,{item, count}])
  }

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((e) => e.item.id !== itemId))
  }

  const clear = () => {
    setCartItems([])
  }

  const total = () => {
    return cartItems.reduce ((a, b) => a + b.item.price * b.count, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, total, removeItem, clear }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
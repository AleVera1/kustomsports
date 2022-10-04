import React, { createContext, useEffect, useState} from 'react'
import { addDoc, collection, documentId, query, writeBatch, getDocs, where } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'
import { useNavigate } from "react-router-dom"

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [orderId, setOrderId] = useState()
  const [orderFinished, setOrderFinished] = useState({})
  let navigate = useNavigate()

  const sendOrder = (totalPrice, buyerInfo, buyDate) => {
    const orderCollection = collection(db, "orders")
    const order = {
      items: cartItems,
      buyer: buyerInfo,
      finalPrice: totalPrice,
      date: buyDate
    }
    addDoc(orderCollection, order)
    .then(res => {
      setOrderId(res.id)
      setOrderFinished({
        ...order,
        orderId: res.id
      })
      orderConfirmed()
    })
      .catch(err => alert("ERROR", err))
  }

  const orderConfirmed = () => {
    clear()
    return navigate("../summary", { replace: true })
  }

  const reduceStock = async(changeProducts) => {
    const queryCollection = collection(db, "products")

    const queryStock = await query(
      queryCollection, 
      where (
        documentId(),
        "in",
        changeProducts.map(e => e.item.id)
      )
    )

    const batch = writeBatch(db)
    await getDocs(queryStock).then(res =>
      res.docs.forEach(e => batch.update(e.ref, {
        stock: e.data().stock - changeProducts.find(el => el.item.id === e.id).count
      }))  
    )
    batch.commit()
  }

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
    <CartContext.Provider value={{ cartItems, addItem, total, removeItem, clear, sendOrder, reduceStock, orderId, orderFinished }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
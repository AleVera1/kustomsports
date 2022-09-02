import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductDetails from '../../product-details.json'

const ItemDetailContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
  const displayProductId = "1"

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(ProductDetails), 2000)
    });
    promise.then((res) => setIsLoading(true))
  }, []);

  const getItem = () => {
    return ProductDetails.filter(item => item.id === displayProductId)
  }

  return ( 
    <section>
      <ItemDetail product={getItem()} loading={isLoading} />
    </section>
  )
}

export default ItemDetailContainer
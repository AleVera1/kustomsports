import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductDetails from '../../product-details.json'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(ProductDetails), 2000)
    });
    promise.then((res) => setIsLoading(true))
  }, []);

  const getItem = () => {
    return ProductDetails.filter(item => item.id === id)
  }

  return ( 
    <section>
      <ItemDetail product={getItem()} loading={isLoading} />
    </section>
  )
}

export default ItemDetailContainer
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import axios from 'axios'

const ItemDetailContainer = () => {
  const [productDetails, setProductDetails] = useState();
	const [isLoading, setIsLoading] = useState(false);

  console.log("hola");

  useEffect(() => {
    /* setIsLoading(true) */
    getProducts()

    /* setTimeout(() => {
      setIsLoading(false)
    }, 1000) */
  },[])


  const getProducts = () => {
    axios.get('product-details.json')
      .then(async(response) => {
        return setProductDetails(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return <>
    <div>{isLoading ? <div><h4>Cargando...</h4></div> : <ItemDetail productDetails={productDetails} />}</div>
    <h1>hola</h1>
  </>
}

export default ItemDetailContainer
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, "products", id)
    getDoc(docRef).then((snapshot) => { 
      const data = {id: snapshot.id, ...snapshot.data()}
      setProduct(data)
      setIsLoading(true)
      return data
    })
  }, [id]);

  return ( 
    <section className='product-detail'>
      <ItemDetail product={product} loading={isLoading} />
    </section>
  )
}

export default ItemDetailContainer
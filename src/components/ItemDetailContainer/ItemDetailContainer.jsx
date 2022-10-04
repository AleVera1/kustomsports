import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../firebase/firebaseConfig'

const ItemDetailContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(false)
  const [productExist, setProductExist] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const docRef = doc(db, "products", id)
    getDoc(docRef).then((snapshot) => { 
      const data = {id: snapshot.id, ...snapshot.data()}

      if(snapshot.exists()) {
        setProductExist(true)
        setProduct(data)
      }
      setIsLoading(true)
      return data
    })
  }, [id]);

  return (
    <>
      {productExist ? (
        <section className='product-detail'>
          <ItemDetail product={product} loading={isLoading} />
        </section>
      ) : (
        <section className='product-detail-error'>
          <p>Producto no encontrado.</p>
        </section>
      )}
    </>
  )
}

export default ItemDetailContainer
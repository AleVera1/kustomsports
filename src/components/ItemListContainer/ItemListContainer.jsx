import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = ( props ) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([])
  const { name } = useParams();

  useEffect(()=>{
    const getCollection = collection(db, "products")
    
    if(name){
      const filteredCollection = query(getCollection, where("category", "==", name))
      getDocs(filteredCollection).then( (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setItems(items)
      })
    }
    else{
      getDocs(getCollection).then( (snapshot) => {
        const items = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()}))
        setItems(items)
      })
    }
    setLoading(true)
  },[name])
  
  return <>
    <section className="item-list-container">
      <ItemList items={items} loading={loading} />
    </section> 
  </> 
}

export default ItemListContainer;
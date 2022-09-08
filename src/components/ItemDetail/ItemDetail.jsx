import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({ product, loading}) => {
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
  };

  const displayProducts = () => {
    if (loading) {
      return (
        <>
          <div className="pdp-left">
            <div className="pdp-img"><img src={`../${product.pictureUrl}`} alt={product.title} /></div>
          </div>
          <div className="pdp-right">
            <div className="pdp-title">{product.title}</div>
            <div className="pdp-sku">SKU: {product.sku}</div>
            <div className="pdp-price">${product.price}</div>
            <div className="pdp-installments">{product.installments}</div>
            <div className="pdp-description-container">
              <p className="pdp-description-title">Descripción</p>
              <p className="pdp-description">{product.description}</p>
            </div>
            {amount === 0 ? (
              <ItemCount stock={product.stock} initial="1" onAdd={onAdd} />
            ) : (
              <div>
                <h3 className="text-added">{amount} productos fueron agregados al carrito!.</h3>
                <Link to="/cart"><button className="pdp-go-cart" >IR AL CARRITO</button></Link>
              </div>
            )}
          </div>
        </>
    )
    }
    else {
      return <div className="loader">Loading...</div>
    }
  }
  return displayProducts()
}

export default ItemDetail
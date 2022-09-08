import './Item.scss'
import { Link, useParams } from 'react-router-dom'

const Item = ({ item }) => {
  const { name } = useParams()
  let picture

  if (name) {
    picture = '../'+item.pictureUrl
  }
  else {
    picture = item.pictureUrl
  }

  return ( 
    <div className="product-card">
      <div className="product-image">
        <Link className="navbar-link" to={`/producto/${item.id}`}><img src={picture} alt="" /></Link>
      </div>
      <Link className="product-link" to={`/producto/${item.id}`}><p className="product-name">{item.title}</p></Link>
      <p className="product-sku">SKU: {item.id}</p>
      <p className="product-price">$ {item.price}</p>
    </div>
  );
}

export default Item;
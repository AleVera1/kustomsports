import './ItemDetail.scss'

const ItemDetail = ({ product, loading}) => {
  const displayProducts = () => {
    if (loading) {
      return (
        <>
        <div className='pdp'>
          <div className="pdp-container">
            <div className="pdp-img">
            <img src={product[0].pictureUrl} alt=''/>
          </div>
          <div className="pdp-details">
              <div className="pdp-content">
                  <h2>{product[0].title}<br />
                      <span>{product[0].subtitle}</span>
                  </h2>
                  <p>
                    {product[0].description}
                  </p>
                  <p>
                    {product[0].installments}
                  </p>
                  <h3>{product[0].price}</h3>
                  <button>Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
    }
    else {
      return <h4>Cargando...</h4>
    }
  }
  return displayProducts()
}

export default ItemDetail
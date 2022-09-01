import './ItemDetail.scss'

const ItemDetail = (productDetails) => {
  return (
    console.log(productDetails)
    /* <div className='pdp'>
      <div className="pdp-container">
        <div className="pdp-img">
            <img src={productDetails.pictureUrl} alt=''/>
        </div>
        <div className="pdp-details">
            <div className="pdp-content">
                <h2>{productDetails.title}<br />
                    <span>{productDetails.subtitle}</span>
                </h2>
                <p>
                  {productDetails.description}
                </p>
                <p>
                  {productDetails.installments}
                </p>
                <h3>{productDetails.price}</h3>
                <button>Comprar</button>
            </div>
        </div>
      </div>
    </div> */
  )
}

export default ItemDetail
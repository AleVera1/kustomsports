import "./CartWidget.scss"

const CartWidget = () => {
  return (
    <div className='cart'>
      <div className='cart-icon'>
        <span className='cart-counter'>0</span>
      </div>
      Carrito
    </div>
  )
}

export default CartWidget;
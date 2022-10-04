import React, { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import { Link } from 'react-router-dom'
import "./Summary.scss"

const Summary = () => {
  const { orderFinished } = useContext(CartContext)
  
  return (
    <>
      <section className="product-summary-container">
        <h3>Muchas gracias por tu compra</h3>
        <p className="product-summary-title">Resumen de compra</p>
        <p className="product-summary-code"><span className="bold">Tu código de compra: </span>{orderFinished.orderId}</p>

        <p className="product-summary-buyer-title">Tus datos</p>
        <p className="product-summary-buyer-name"><span className="bold">Nombre: </span>{orderFinished.buyer[0]}</p>
        <p className="product-summary-buyer-mail"><span className="bold">Email: </span>{orderFinished.buyer[1]}</p>
        <p className="product-summary-buyer-phone"><span className="bold">Teléfono: </span>{orderFinished.buyer[1]}</p>
        <p className="product-summary-buyer-phone"><span className="bold">Fecha de compra: </span>{orderFinished.date}</p>
        <h4>Productos</h4>

        <table>
          <tbody>
          {orderFinished.items.map((product, index) => (
            <React.Fragment key={index}>
              <tr key={index}>
                <td width={50}><img alt={product.item.title} src={product.item.pictureUrl} /></td>
                <td align="left" className="product-name">{product.item.title}</td>
                <td>X{product.count}</td>
                <td>${product.item.price * product.count}</td>
              </tr>
            </React.Fragment>
          ))}
            <tr>
              <td className="summary-total" colSpan={2}>Total: ${orderFinished.finalPrice}</td>
            </tr>
          </tbody>
        </table>
        <Link className="back-home" to="/">Volver</Link>
      </section>
    </>
  );
}

export default Summary
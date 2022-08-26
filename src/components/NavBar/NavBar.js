import './NavBar.scss'
import logo from "../../assets/logos/ksp-logo.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
      <div className="preheader">
        Suscribite a nuestro Newsletter y recibi todas las novedades!
      </div>
      <div className="header">
        <div className="header-container">
          <div className="ksp-logo"><img alt="KustomSports Logo" title="KustomSports Logo" src={logo} /></div>
            <div className="user">
              <div className='my-acc'>Cuenta</div>
              <CartWidget />
            </div>
        </div>
        <div className='menu-container'>
          <ul>
            <li className="menu-section">ZAPATILLAS</li>
            <li className="menu-section">ROPA</li>
            <li className="menu-section">CAMISETAS</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
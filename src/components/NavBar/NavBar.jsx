import './NavBar.scss'
import logo from "../../assets/logos/ksp-logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <div className="preheader">
        Suscribite a nuestro Newsletter y recibi todas las novedades!
      </div>
      <div className="header">
        <div className="header-container">
        <Link className="navbar-link" to={"/"}><div className="ksp-logo"><img alt="KustomSports Logo" title="KustomSports Logo" src={logo} /></div></Link>
            <div className="user">
              <div className='my-acc'>Cuenta</div>
              <CartWidget />
            </div>
        </div>
        <div className='menu-container'>
          <ul>
            <Link className="navbar-link" to={"/"}><li className="menu-section">PRODUCTOS</li></Link>       
            <Link className="navbar-link" to={"/categoria/zapatillas"}><li className="menu-section">ZAPATILLAS</li></Link>
            <Link className="navbar-link" to={"/categoria/ropa"}><li className="menu-section">ROPA</li></Link>
            <Link className="navbar-link" to={"/categoria/camisetas"}><li className="menu-section">CAMISETAS</li></Link>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
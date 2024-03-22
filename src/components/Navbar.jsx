import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import Dropdown from './Dropdown';




const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>Geto Store</h1></Link>
      <ul className='menu'>
        <Dropdown>
          <li><Link className='menu-link' to='/productos/mugs'>Mugs</Link></li>
          <li><Link className='menu-link' to='/productos/camisas'>Camisas</Link></li>
          <li><Link className='menu-link' to='/productos/bolsos'>Bolsos</Link></li>
          <li><Link className='menu-link' to='/productos/buzos'>Chompas</Link></li>
          <li><Link className='menu-link' to='/productos/accesorios'>Accesorios</Link></li>
          <li><Link className='menu-link' to='/productos/colección'>Coleccionables</Link></li>
        </Dropdown>
        <Link className='menu-link' to='/show'>Administrador</Link>
        <Link className='car' to="/carrito"><i class="fa-solid fa-cart-shopping"></i></Link>
        <Link className='login' to='/login'><i class="fa-solid fa-right-to-bracket"></i></Link>
      </ul>
    </nav>
  )
}

export default Navbar


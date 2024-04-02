import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';





const Navbar = ({ usuario }) => {
  return (
    <nav className='navbar'>
      <NavLink to="/" className='logo'><h1>Geto Store</h1></NavLink>
      <ul className='menu'>
        <Dropdown>
          <li><NavLink className='menu-link' to='/productos/mugs'>Mugs</NavLink></li>
          <li><NavLink className='menu-link' to='/productos/camisas'>Camisas</NavLink></li>
          <li><NavLink className='menu-link' to='/productos/bolsos'>Bolsos</NavLink></li>
          <li><NavLink className='menu-link' to='/productos/buzos'>Chompas</NavLink></li>
          <li><NavLink className='menu-link' to='/productos/accesorios'>Accesorios</NavLink></li>
          <li><NavLink className='menu-link' to='/productos/colección'>Coleccionables</NavLink></li>
        </Dropdown>
        <NavLink className='menu-link' to='/show'>Administrador</NavLink>
        <NavLink className='menu-link' to='/user'>Perfil</NavLink>
        <CartWidget/>
        <NavLink className='login' to='/login'><i class="fa-solid fa-right-to-bracket"></i></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar


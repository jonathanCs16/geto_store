import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import '../css/Navbar.css'
import Dropdown from './Dropdown';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Geto Store</h1></Link>
      <ul className='menu'>
        <Link className='car' to="/carrito"><FaCartShopping /></Link>
        <Dropdown>
        <li><Link className='menu-link' to='/productos/Mugs'>Mugs</Link></li>
        <li><Link className='menu-link' to='/productos/Camisas'>Camisas</Link></li>
        <li><Link className='menu-link' to='/productos/Bolsos'>Bolsos</Link></li>
        <li><Link className='menu-link' to='/productos/Chompas'>Chompas</Link></li>
        <li><Link className='menu-link' to='/productos/Accesorios'>Accesorios</Link></li>
        </Dropdown>
        <li><Link className='login' to='/login'>Ingresar</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar


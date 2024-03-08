import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Geto Store</h1></Link>
      <ul className='menu'>
        <li><Link className='menu-link' to='/productos/Mugs'>Mugs</Link></li>
        <li><Link className='menu-link' to='/productos/Camisas'>Camisas</Link></li>
        <li><Link className='menu-link' to='/productos/Bolsos'>Bolsos</Link></li>
        <li><Link className='menu-link' to='/productos/Chompas'>Chompas</Link></li>
        <li><Link className='login' to='/login'>Ingresar</Link></li>
        <li><Link className='register' to='/register'>Crear cuenta</Link></li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default Navbar


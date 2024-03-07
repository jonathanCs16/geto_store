import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Geto Store</h1></Link>
      <ul className='menu'>
        <li><Link className='menu-link' to='/productos'>Productos</Link></li>
        <li><Link className='menu-link' to='/productos/mugs'>Mugs</Link></li>
        <li><Link className='menu-link' to='/productos/camisas'>Camisas</Link></li>
        <li><Link className='menu-link' to='/productos/bolsos'>Bolsos</Link></li>
        <li><Link className='menu-link' to='/productos/chompas'>Chompas</Link></li>
        <li><Link className='menu-link' to='/login'>Ingresar</Link></li>
        <li><Link className='menu-link' to='/register'>Crear cuenta</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar


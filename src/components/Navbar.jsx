import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import appFirebase from '../firebase/config'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Navbar = ({correoUsuario}) => {
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
        <h1 className='usuario'>bienvenido {correoUsuario} <button className='btn-logout' onClick={() => signOut (auth)}><h1 className='cerrar'>Cerra Sesion</h1></button></h1>
    </nav>
  )
}

export default Navbar


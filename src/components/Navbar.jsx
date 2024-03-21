import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import Dropdown from './Dropdown';
import UserView from './user/UserView';
import Show from './admin/Show';
import app from '../firebase/config';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(app);


const Navbar = ({ rol }) => {
  return (
    <>
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
        <li><Link className='login' to='/login'><i class="fa-solid fa-right-to-bracket"></i></Link></li>
        <Link className='car' to="/carrito"><i class="fa-solid fa-cart-shopping"></i></Link>
        <button onClick={() => signOut(auth)}>Cerrar Sesion</button>
      </ul>
    </nav>
        {rol === "admin" ? <Show/> : <UserView />}
        </>
  )
}

export default Navbar


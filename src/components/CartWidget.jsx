import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <NavLink className='car' to='/carrito'>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className='numerito'> {cantidadEnCarrito()}</span>
      </NavLink>
    </div>
  )
}

export default CartWidget
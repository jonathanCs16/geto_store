import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import '../css/Carrito.css'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className="main-title">Carrito</h1>
        
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <div className='compra'>
                    <h3>{prod.titulo}</h3>
                    <p>Precio c/u: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>cantidad: {prod.cantidad}</p>
                    </div>
                </div>
            ))
        }
        {   carrito.length > 0 ?    
        <>
            <h2>precio total: ${precioTotal()}</h2> 
            <button className='btn-vaciar' onClick={handleVaciar}>Vaciar</button>
            <button className='btn-finalizar'><Link className='link-finalizar' to="/checkout">Finalizar compra</Link></button>
        </> :
        <h2>El carrito está vacío</h2>
        }

    </div>
  )
}

export default Carrito
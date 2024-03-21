import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Item.css'
import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
    <div className='producto '>
      <img src={producto.imagen} alt={producto.titulo}/>
      <div>
        <h4>{toCapital(producto.titulo)}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {toCapital(producto.categoria)}</p>
        <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item

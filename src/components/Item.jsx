import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Item.css'
import { toCapital } from '../helpers/toCapital'
import { useFavoriteContext } from '../contexts/Favorites';

const Item = ({ producto, id }) => {

  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  // const icone = isFavorite ? iconUnfavorite : iconFavorite


  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{toCapital(producto.titulo)}</h4>
        <p>Precio: <strong>${producto.precio}</strong></p>
        <p>Categoria: {toCapital(producto.categoria)}</p>
        <div className='icon'>
        <Link className='ver-mas' to={`/item/${producto.id}`}><i className="fa-solid fa-eye"></i></Link>
        <i 
        className="corazon fa-solid fa-heart"
        onClick={() => addFavorite({id})}
        ></i>
        </div>

      </div>
    </div>
  )
}

export default Item

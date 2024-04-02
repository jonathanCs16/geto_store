import ItemCount from "./ItemCount"
import { toCapital } from './../helpers/toCapital';
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import '../css/ItemDetail.css'



const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);
    const [cantidad, setCantidad] = useState(1);
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }



  return (
    <div className="prod-container">
        <div className="producto-detalle">

        {/* <i
        className="corazon"
        Name={ isFavorite ? "fa-regular fa-heart" : "fa-solid fa-heart" }
        // onPress={ isFavorite ? removeFavorite : addFavorite }
        color={ isFavorite ? "#fff" : "#4bb5e7" }
        size={35}
        underlayColor="tranparent"
        /> */}
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{toCapital(item.titulo)}</h3>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="descripcion">Descripcion: {item.descripcion}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount 
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>

  )
}

export default ItemDetail
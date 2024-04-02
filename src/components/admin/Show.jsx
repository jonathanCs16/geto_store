import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection,  getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config'
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/config';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

const auth = getAuth(app);

const Show = ({ usuario }) => {
    const [productos, setProductos] = useState([]);


    const productosCollection = collection(db, "productos")

    const getProductos = async () => {
       const data = await getDocs(productosCollection)
        setProductos(
          data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
    }

    const deleteProductos = async (id) => {
      const productoDoc = doc(db, 'productos', id)
       await deleteDoc(productoDoc)
       getProductos()
    }

      const consfirmDelete = (id) => {
        MySwal.fire({
          title: "¿Eliminar el producto?",
          text: "Si lo eliminas no podras restablecerlo",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Si, eliminar!"
        }).then((result) => {
          if (result.isConfirmed) {
            deleteProductos(id)
            Swal.fire({
              title: "Eliminado!",
              text: "El producto se ha eliminado del inventario.",
              icon: "success"
            });
          }
        });
      }

    useEffect( () => {
        getProductos()
    }, []);




  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <h1>Panel de administrador  <i className="fa-solid fa-user-tie"></i></h1>
              <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                <th>Titulo</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
                </tr>
              </thead>

                <tbody>
                  { productos.map( (producto) => (
                    <tr key={producto.id}>
                      <td>{producto.titulo}</td>
                      <td>{producto.categoria}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.stock}</td>
                      <td>
                        <Link to={`/edit/${producto.id}`} className='btn btn-light'><i className="fa-solid fa-pen"></i></Link>
                        <button onClick={ () => { consfirmDelete(producto.id) } } className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                      </td>
                    </tr>
                  )) }
                </tbody>


            </table>
          </div>
        </div>
        <button onClick={() => signOut(auth)}>Cerrar Sesion</button>
      {usuario?.rol === "admin" }
      </div>
    </>
  )
}

export default Show
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import app from '../../firebase/config'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const db = getFirestore(app)
const storage = getStorage(app)

const Create = () => {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [stock, setStock] = useState(0)
  const [precio, setPrecio] = useState(0)
  const navigate = useNavigate()

  const productosCollection = collection(db, 'productos')

  let urlImDesc = '';

  const store = async (e) => {
    e.preventDefault()

    if (urlImDesc !== '') {
      try {
        await addDoc(productosCollection, {
          titulo: titulo,
          stock: stock,
          precio: precio,
          categoria: categoria,
          imagen: urlImDesc,
          descripcion: descripcion
        })
        navigate('/show')
        e.target.file.value = '';
      } catch (error) {
        console.error('Error al añadir producto:', error)
      }
    } else {
      console.warn('Imagen no subida, no se puede guardar el producto.')
    }
  }

  const filehandler = async (e) => {
    const archivoI = e.target.files[0];
    const refArchivo = ref(storage, `documentos/${archivoI.name}`)
    await uploadBytes(refArchivo, archivoI)
    urlImDesc = await getDownloadURL(refArchivo)
  }


  return (
    <div className="create-container">
      <div className="row">
        <div className="col">
          <h1>Crear Producto</h1>

          <form onSubmit={store}>

            <div className="mb-3">
              <label className="form-label">Nombre
                <input
                  placeholder='Nombre del producto'
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Categoria
                <input
                  placeholder='Categoria del producto'
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción
                <input
                  placeholder='Descripción del producto'
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Unidades existentes
                <input
                  placeholder='Stock del producto'
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Precio
                <input
                  placeholder='Precio del producto'
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>
    
            <div className="mb-3">
              <label className='form-label'>Agregar imagen
              <input 
                type='file' 
                id='file' 
                placeholder='agregar imagen' 
                className="form-control" 
                onChange={filehandler}
              />
              </label>
            </div>
            <button type='submit' className='btn btn-primary'>Agregar</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Create
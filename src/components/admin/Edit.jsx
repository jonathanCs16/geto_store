import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Edit = () => {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [stock, setStock] = useState(0)
  const [precio, setPrecio] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const producto = doc(db, 'productos', id)
      const data = { titulo, categoria, stock, precio, descripcion }
      await updateDoc(producto, data)
      navigate('/show')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getProductoById = async (id) => {
    setLoading(true)
    try {
      const producto = await getDoc(doc(db, 'productos', id))
      if (producto.exists()) {
        setTitulo(producto.data().titulo)
        setCategoria(producto.data().categoria)
        setDescripcion(producto.data().descripcion)
        setStock(producto.data().stock)
        setPrecio(producto.data().precio)
      } else {
        console.log('El producto no existe')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductoById(id)
  }, [])

  return (
    <div className="create-container">
      <div className="row">
        <div className="col">
          <h1>Editar Producto</h1>

          {loading && <p>Cargando...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <form onSubmit={update}>
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
            <button type='submit' className='btn btn-primary'>Editar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit

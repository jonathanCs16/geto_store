import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Login from './components/Login';
import Register from './components/Register';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

//modulos de firebase
import app from './firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app)


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (

    <div>
      {/* //{usuario ? ( */}
        <CartProvider>
          <BrowserRouter>
            <Navbar   />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      {/* // ) : (
      //   <Login />
      // )} */}
    </div>

  );
}

export default App;
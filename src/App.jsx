import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import ItemListContainer from './components/pages/producto/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Login from './components/pages/login/Login';
import Carrito from './components/pages/carrito/Carrito';
import Checkout from './components/Checkout';
import Show from './components/admin/Show';
import Edit from './components/admin/Edit';
import User from './components/user/UserView';
import Create from './components/admin/Create';
import FavoritesProvider from './contexts/Favorites';




//modulos de firebase
import app from './firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);


function App() {

  const [usuario, setUsuario] = useState(null)

  async function getRol(uid) {

    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function SetUserWithFirebaseRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const usuarioData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUsuario(usuarioData);
      console.log('usuarioData final', usuarioData)
    })
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {

      if (!usuario) {
        SetUserWithFirebaseRol(usuarioFirebase);
      }

    } else {
      setUsuario(null);
    }
  })



  return (

    <div>
      <CartProvider>
        <BrowserRouter>
          <FavoritesProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/create" element={<Create/>} />
              {usuario?.rol === "admin" ? (
                <>
                  <Route path="/show" element={<Show usuario={usuario} />} />
                </>
              ) : (
                <Route path="/login" element={<Login />} />
              )}
              {usuario?.rol === "Usuario" ? (
                <Route path="/user" element={<User usuario={usuario} />} />
              ) : (
                <Route path="/login" element={<Login />} />

              )}
            </Routes>
          </FavoritesProvider>
        </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;
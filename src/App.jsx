import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Login from './components/Login';
import Register from './components/Register';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
 

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>


        </BrowserRouter>
      </CartProvider>    
    </div>
  );
}

export default App;
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
 

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
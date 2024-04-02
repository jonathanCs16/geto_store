import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/config';
import './UserView.css';
import Favorite from './favorites/Favorite';

const auth = getAuth(app);



const UserView = ({ usuario }) => {



  return (
    <div>
      <div className='perfil'>

        <div className="info">
          <h1>PERFIL</h1>
          <i class="fa-solid fa-user"></i>
          <p>usuario</p>
          <h2>{usuario.email}</h2>
          <div className="linea"></div>
          <p>Contacto</p>
          <h2>########</h2>
          <div className="linea"></div>
          <h2>nose que dice</h2>
        </div>
            <button className='btnSingout' onClick={() => signOut(auth)}>Cerrar Sesion</button>
      </div>
      <div className="favoritos">
        <Favorite/>
      </div>


      {usuario?.rol === "Usuario"}

    </div>
  )
}

export default UserView
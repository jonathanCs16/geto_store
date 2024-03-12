import { useState } from 'react';
import imgLogin from '../assets/login.jpg';
import imgProfile from "../assets/profile.jpg";
import '../css/Login.css';

import app from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const Login = () => {

  const [registrando, setRegistrando] = useState(false);

  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, contrasena);
        const infoUsuario = getAuth().currentUser;

        console.log(infoUsuario.uid, correo, contrasena);

        const docuRef = doc(firestore, `usuarios/${infoUsuario.uid}`);
        setDoc(docuRef, { correo, contrasena });
        
      } else {
        await signInWithEmailAndPassword(auth, correo, contrasena);
      }
    } catch (error) {
      if (error.code === 'auth/weak-password') {

        alert("Asegúrate de que la contraseña tenga más de 8 caracteres");

      } else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {

        alert("El correo o la contraseña son incorrectos");
      } else {
        console.error("Error:", error);
      }
    }
  };


  return (
    <div className='container'>
      <div className="row">
          {/* columna mas pequeña */}
        <div className="col-md-4">
            <div className="padre">
              <div className="card card-body shadow-lg">
                <h1 className='text-center'>{registrando ? "Registrate" : "Inicia Sesion"}</h1>
                <img src={imgProfile} alt="" className='estilo-profile'/>
                  <form onSubmit={functAutentication}>
                    <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                    <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password'/>
                    <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                  </form>
                  <h4 className='texto'>{registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}<button className='btnswicth' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
              </div>
            </div>
        </div>
          {/* columna mas grande */}
        <div className="col-md-8">
            <img src={imgLogin} alt="" className='tamaño-imagen'/>
        </div>
      </div>
    </div>
  )
}

export default Login
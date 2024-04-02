import { useState } from 'react';
import imgLogin from '../../../assets/login.jpg';
import imgProfile from "../../../assets/profile.jpg";
import './Login.css';

import app from '../../../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const Login = () => {

  const [registrando, setRegistrando] = useState(false);


  const registrarUsuario = async (correo, contrasena, rol) => {

    const infoUsuario = await createUserWithEmailAndPassword(
      auth, 
      correo, 
      contrasena
      ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef,{correo: correo, rol: rol});
  }


  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;
    const rol = 'Usuario';
    
    if (registrando) {
      registrarUsuario(correo, contrasena, rol);
    } else {
      try {
        signInWithEmailAndPassword(auth, correo, contrasena)
      } catch (error) {
        alert("El correo o la contraseña son incorrectos")
      }
    }
  };


  return (
    <div className='container'>
      <div className="row">
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
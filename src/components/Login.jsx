import { useForm } from "react-hook-form"

const Login = () => {

    const { register, handleSubmit } = useForm();

    const enviado = (data) => {
      console.log(data);
    }

  return (
    <div className='container'>
      <h1 className="main-title">Ingresar</h1>
      <form className='formulario' onSubmit={handleSubmit(enviado)}>

        <input type="text" placeholder='Ingresa email' {...register("email")}/>
        <input type="password" placeholder='Ingresa contraseña' {...register("contrasena")}/>
        
        <button className='enviar' type="submit">Enviar</button>
      
      </form>
    </div>
  )
}

export default Login
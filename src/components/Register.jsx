import { useForm } from "react-hook-form"

const Register = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className='container'>
      <h1 className="main-title">Registro</h1>
    <form className='formulario' onSubmit={handleSubmit(enviar)}>

      <input type="text"  placeholder='Ingresa nombre' {...register("nombre")}/>
      <input type="email"placeholder='Ingresa email' {...register("email")}/>
      <input type="password" placeholder='Ingresa contrasena' {...register("contrasena")}/>
      
      <button className='enviar' type="submit">Enviar</button>
    </form>
  </div>
  )
}

export default Register
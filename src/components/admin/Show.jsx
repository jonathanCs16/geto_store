import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Myswal = withReactContent(Swal)


const Show = () => {
    // const {productos, setProductos} = useState( [] )


    // const productosCollection = collection(db, 'productos')

    // const getProductos = collection = async () =>{
    //    const data = await getDocs(productosCollection)
    //    console.log(data)
    // }

    // useEffect( () => {
    //     getProductos()
    // }, [] )




  return (
    <div>Show</div>
  )
}

export default Show
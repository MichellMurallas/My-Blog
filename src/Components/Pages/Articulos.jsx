import React, { useState, useEffect } from 'react'
import { Peticion } from '../Helpers/Peticion';
import { Global } from '../Helpers/Global';
import { Listado } from './Listado';


const Articulos = () => {

  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    conseguiArticulos();
  }, [])

  const conseguiArticulos = async() => {

    const {datos, cargando} = await Peticion(Global.url+"articulos", "GET");

    if (datos.status === "success"){
      setArticulos(datos.articulos);
    }
    setCargando(false)
  }

  return (
    <>
    {cargando? "Cargando..." :
  
      articulos.length >=1 ? 
           <Listado articulos={articulos} setArticulos={setArticulos} />
           : <h1>No hay articulos</h1>
    }
    </>
  )
}

export default Articulos;
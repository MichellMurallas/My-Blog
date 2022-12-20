import React, { useEffect, useState } from 'react'
import react from "../../assets/react.svg"
import { Global } from '../../Helpers/Global';
import { Peticion } from '../../Helpers/Peticion';
import { Listado } from './Listado';

const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async()=>{

    const {datos, cargando} = await  Peticion(Global.url+"articulos", "GET")

    if(datos.status === "success"){
      setArticulos(datos.articulos)
    }
    setCargando(false)
  }

  return (
    <>
    {cargando ? "Cargando..." : 

      articulos.length >= 1 ?
      <Listado articulos={articulos} setArticulos={setArticulos} />
      : <h1>No hay articulos</h1>
}

    </>
  )
}

export default Articulos;
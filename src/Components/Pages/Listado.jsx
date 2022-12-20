import React from 'react'
import { Global } from '../../Helpers/Global';
import react from "../../assets/react.svg"

export const Listado = ({articulos, setArticulos}) => {
  return (
    (
      articulos.map(articulo   =>{
        return(
          <article key={articulo._id} className="articulo-item">
          <div className='mascara'>
            {articulo.imagen != "default.png" && <img src={Global.url +"imagen/" + articulo.imagen } alt="" />} :
            {articulo.imagen === "default.png" && <img src={react} alt="" />}
          </div>
          <div className='datos'>
            <h3 className="title">{articulo.titulo} </h3>
            <p className="description">{articulo.contenido}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
        );
      })
      )
  )
}

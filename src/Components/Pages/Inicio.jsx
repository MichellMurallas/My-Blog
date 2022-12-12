import React from 'react'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido al Blog con Rect</h1>
      <p>Blog desarrollado con el Mern Stack (Mongo, Express, React y NodeJS)</p>
      <Link to="articulos" className='button'>Ver los Articulos</Link>
    </div>
  )
}

export default Inicio;

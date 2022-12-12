import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
          <li><NavLink to="/Inicio">Inicio</NavLink></li>
          <li><NavLink to="/Articulos">Articulos</NavLink></li>
          <li><NavLink to="/CrearArticulos">Crear Articulos</NavLink></li>
          <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav

import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="inicio">Inicio</NavLink></li>
        <li><NavLink to="articulos">Articulos</NavLink></li>
        <li><NavLink to="/crearArticulos">Crear Articulos</NavLink></li>
        <li><NavLink to="#">Contacto</NavLink></li>
    </ul>
</nav>
  )
}

export default Nav

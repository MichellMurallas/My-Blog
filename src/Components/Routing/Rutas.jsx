import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Layoaut/Footer'
import Header from '../Layoaut/Header'
import Nav from '../Layoaut/Nav'
import Sidebar from '../Layoaut/Sidebar'
import Articulos from '../Pages/Articulos'
import Busqueda from '../Pages/Busqueda'
import Crear from '../Pages/Crear'
import Editar from '../Pages/Editar'
import Inicio from '../Pages/Inicio'

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <section>
        <Routes>
          <Route>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
            <Route path='/CrearArticulos' element={<Crear />} />
            {/* <Route path='/articulos' element={<Articulos />} />
            <Route path='/busqueda' element={<Busqueda />} />
            <Route path='/crear' element={<Crear />} />
            <Route path='/editar' element={<Editar />} /> */}
          </Route>
        </Routes>
      </section>
      <Sidebar />
      <Footer />
      
    </BrowserRouter>
  )
}

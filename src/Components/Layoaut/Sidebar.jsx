import React from 'react'

const Sidebar = () => {
  return (
    <aside className="lateral">
    <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
            <input type="text" id="search_field" />
            <button id="search">Buscar</button>
        </form>
    </div>

    {/* <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div> */}
</aside>
  )
}

export default Sidebar

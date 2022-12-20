import React, { useState } from 'react'
import { Global } from '../../Helpers/Global';
import { Peticion } from '../../Helpers/Peticion';
import { useForms } from '../Hooks/useForms';


const Crear = () => {
  
  const {formulario, enviado, cambiado} = useForms({});
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = async (e) =>{
    e.preventDefault();

    //Recoge datos del formulario
    let nuevoArticulo = formulario;
    
    //Guardar articulos en el Backend
    const {datos} = await Peticion(Global.url+"crear", "POST", nuevoArticulo);

    if(datos.status === "success"){
      setResultado("guardado");
    }else{
      setResultado("error")
    }

    //Subir Imagen:
    const fileInput = document.querySelector("#file");

    if(datos.status === "success" && fileInput.files[0] ){
      setResultado("guardado");


      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const subida = await Peticion(Global.url+"subir-imagen/"+datos.articulo._id, "POST", formData, true);

      if(subida.datos.status === "success"){
        setResultado("guardado");
      }
      // else{
      //   setResultado("error")
      // }
    }
  }

  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear artículo</p>
      <strong>{resultado == "guardado" ? "Articulo guardado con exito!!" : "" } </strong>
      <strong>{resultado == "error" ? "Faltan datos por enviar o los datos son incorrectos" : "" } </strong>

      <form className='formulario' onSubmit={guardarArticulo} >
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" onChange={cambiado}  />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  )
}

export default Crear;


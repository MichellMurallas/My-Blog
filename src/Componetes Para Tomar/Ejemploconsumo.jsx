import { useEffect, useState } from "react"
// import { Rutas } from "./Components/Routing/Rutas"

function Ejemploconsumo() {
  const [consumo, setConsumo] = useState();
  const url = "https://jsonplaceholder.typicode.com/todos"

  const fetchApi = async () =>{
    const response = await fetch (url)
    const responseJSON = await response.json()
    setConsumo(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])


  return (
    <div className="Ejemploconsumo">
      <h1>Hola Mundo!</h1>

      <ul>
        { !consumo ? "Cargando..." :
        consumo.map((consumo, index)=>{
          return <li key={index}>{consumo.title}</li>  
        })
        }
      </ul>


      {/* <Rutas /> */}
    </div>
  )
}

export default Ejemploconsumo
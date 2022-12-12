import { useEffect, useState } from "react"


function ConsumoApi() {
  const [characters, setcharacters] = useState([])

  const getApi = async () =>{
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data.results)
      setcharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getApi();
  }, [])


  return (
    <div className="ConsumoApi">
      {/* <h1>Hola Mundo!</h1> */}

      {
        characters.map((character)=>(
          <div key={character.id} >
            <h3>{character.mane}</h3>
            <img src={character.image} alt="" />
            <p>{character.species}</p>
          </div>
        ))
      }

      {/* <Rutas /> */}
    </div>
  )
}

export default ConsumoApi

import { useState } from 'react'
import Card from './Components/Card'
import styleApp from "./Components/card.module.css"

function App() {

  const [nombre,setNombre]=useState('')
  const [cancion,setCancion]=useState('')
  const [genero,setGenero]=useState('')
  const [validacion,setValidacion]=useState(false)
  const [error,setError]=useState(false)

  const handleNombre=(event)=>setNombre(event.target.value.trimStart())
  const handleCancion=(event)=>setCancion(event.target.value.trimStart())
  const handleGenero=(event)=>setGenero(event.target.value.trimStart())

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(nombre.length>=3 && cancion.length>=3  && genero.length>=6){
      setValidacion(true)
      setError(false)
     
    }
    else{
      setValidacion(false)
      setError(true)
    }
  }

  return (
    <div>
      { !validacion&&
          <form className={styleApp.formulario} onSubmit={handleSubmit} >
          <h1 className={styleApp.titulo}>Escribe tu cancion favorita</h1>
             <input className={styleApp.inputs} type="text" placeholder='Escribe tu nombre' onChange={handleNombre}/>
             <input className={styleApp.inputs} type="text" placeholder='Escribe tu cancion favorita' onChange={handleCancion} />
             <input className={styleApp.inputs}type="text" placeholder='Escribe el genero de tu cancion' onChange={handleGenero} />
             <button className={styleApp.boton}>Enviar</button>
          </form>
      }
   

     {validacion?   <Card nombre={nombre} cancion={cancion} genero={genero}/>:
      null
     }
  
   
     {error&& <h3 className={styleApp.mensajeError}>Por favor chequea que la información sea correcta</h3>}
    </div>
  )
}

export default App

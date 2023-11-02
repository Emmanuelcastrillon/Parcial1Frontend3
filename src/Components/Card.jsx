import React from 'react'
import styleCard from "../Components/card.module.css"

const Card = ({nombre,cancion,genero}) => {
  return (
    <div className={styleCard.contenedor}>
      <h1 className={styleCard.tituloCard}>Hola {nombre}</h1>
      <h2 className={styleCard.cancion}>Tu cancion favorita es "{cancion}"</h2>
      <h2 className={styleCard.genero}>El genero de la cancion ({cancion}) es "{genero}"</h2>
    </div>
  )
}

export default Card
import React from 'react'
import { Link } from 'react-router-dom'

const PokeCard = ({ name, height, sprites, species }) => (
  <div>
    <Link to={`/pokemon/${name}`} >
      <h1>{name}</h1>
      <p>{height}</p>
      <img src={sprites} alt={name} />
      <p>{species}</p>
    </Link>
  </div>
)

export default PokeCard
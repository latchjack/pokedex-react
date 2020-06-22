import React from 'react'
import { Link } from 'react-router-dom'

const PokeCard = ({ name }) => (
  <div>
    <Link to={`/pokemon/${name}`} >
      <h1>{name}</h1>
    </Link>
  </div>
)

export default PokeCard
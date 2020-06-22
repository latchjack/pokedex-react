import React from 'react'
import axios from 'axios'

class PokeShow extends React.Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const name = this.props.match.params.id
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    // const { name, id, species, sprites, height, weight } = this.state.pokemon
    return (
      <div>
        <p>poke</p>
        {/* <h1>{name}</h1>
        <p>{id}</p>
        <p>{species}</p>
        <p>{height}</p>
        <p>{weight}</p> */}
      </div>
    )
  }

}

export default PokeShow

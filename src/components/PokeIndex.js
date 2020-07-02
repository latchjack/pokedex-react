import React from 'react'
import axios from 'axios'

import PokeCard from './PokeCard'

class PokeIndex extends React.Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      console.log(res.data.results)
      this.setState({ pokemon: res.data.results })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {this.state.pokemon.map(monster => <PokeCard key={monster.name} {...monster} />)}
      </div>

      // <div>
      //   {this.state.pokemon.map(monster => <div key={monster.name} {...monster}>{monster.name}</div>)}
      // </div>
    )
  }

}

export default PokeIndex
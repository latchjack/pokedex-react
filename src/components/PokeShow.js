import React from 'react'
import axios from 'axios'

class PokeShow extends React.Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const name = this.props.match.params.id
    try {
      console.log('component did mount')
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      console.log(res.data)
      this.setState({ pokemon: res.data.results })
    } catch(err) {
      console.log(err)
    }
  }


  render() {
    console.log('rendering page')
    const { data, name, id, species, height, weight } = this.state
    // if (!data) return <div className="loading"></div>
    return (
      <div>
        <p>poke</p>
        <h1>{name}</h1>
        <p>{id}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
        <p>{species}</p>
        <p>{height}</p>
        <p>{weight}</p>
      </div>
    )
  }

}

export default PokeShow

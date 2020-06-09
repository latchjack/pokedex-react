import React from 'react'
import axios from 'axios'

class PokeIndex extends React.Component {

  state = {
    monsters: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      console.log(res.data.results)
      this.setState({ monsters: res.data.results })
    } catch (err) {
      console.log(err)
    }
    
  }

  render() {
    return (
      <div>
        <div>
          {this.state.monsters.map(monster => <li key={monster.name}>{monster.name}</li>)}
        </div>
      </div>
    )
  }
}


export default PokeIndex
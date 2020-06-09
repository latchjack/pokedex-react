import React from 'react'
import axios from 'axios'

class PokeIndex extends React.Component {

  state = {
    cards: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://api.pokemontcg.io/v1/cards?name')
      console.log(res.data.cards)
      this.setState({ cards: res.data.cards })
    } catch (err) {
      console.log(err)
    }
    
  }

  render() {
    return (
      <div>
        <div>
          {this.state.cards.map(card => <li key={card.nationalPokedexNumber}>{card.name}</li>)}
        </div>
      </div>
    )
  }
}


export default PokeIndex
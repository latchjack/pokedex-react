import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import PokeShow from './components/PokeShow'
import PokeIndex from './components/PokeIndex'

const App = () => (
  <BrowserRouter>
      <>
      <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokemon/:id" component={PokeShow} />
            <Route path="/pokemon" component={PokeIndex} />
            {/* <Route path="/pokemonbytype" component={PokemonTypeIndex} /> */}
          </Switch>
        </>
  </BrowserRouter>
)

export default App

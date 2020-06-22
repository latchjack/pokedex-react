import React from 'react'
import './App.css'

import PokeIndex from './components/PokeIndex'
import PokeShow from './components/PokeShow'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/pokemon/:name" component={PokeShow} />
        <Route path="/pokemon" component={PokeIndex} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App

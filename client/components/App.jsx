import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route exact path="/about" render={ () => <About /> } />
        <Route exact path="/projects" render={ () => <Projects /> } />
        <Route exact path="/contact" render={ () => <Contact /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default App

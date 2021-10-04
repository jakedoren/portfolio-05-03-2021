import './App.css'
import React, {useState, useEffect} from 'react'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'
import ThemeProvider from './ThemeProvider'
import About from './components/pages/About'

function App() {

  return (
    <div className="app">
      <ThemeProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App

import './App.css';
import React, {useState, useEffect} from 'react'
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Work from './components/pages/Work';
import Contact from './components/pages/Contact'
import ThemeContext, {defaultState} from './ThemeContext'
import ThemeProvider from './ThemeProvider';

function App() {

  return (
    <div className="app">
      <ThemeProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

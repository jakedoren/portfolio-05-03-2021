import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Work from './components/pages/Work';
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Work} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;

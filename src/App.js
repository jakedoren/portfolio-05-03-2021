import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;

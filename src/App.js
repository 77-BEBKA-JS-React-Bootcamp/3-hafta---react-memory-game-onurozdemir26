import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss'
import CardGame from './components/CardGame/CardGame';
import Home from './components/Home/Home';
import Result from './components/Result/Result';





export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="list">
            <li>
              <button>
                <Link to="/" className="button">Home</Link>
              </button>
              
            </li>
            <li>
              <button >
                <Link to="/play" className="button">Play Anonymously</Link>
              </button>
            </li>
          </ul>
        </nav>

        <Switch className="switch">
          <Route path="/play">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}
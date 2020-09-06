import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home"><Home/> </Route>
        <Route path = '/newsdetails/:newsid'><NewsDetails></NewsDetails></Route>
        <Route exact path="/"><Home/> </Route>
        <Route path = "*"><NotFound/></Route>
      </Switch>
    </Router>
  );
}

export default App;

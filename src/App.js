import {Login} from './Componentes/Login';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  document.title = 'JFLS'
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;

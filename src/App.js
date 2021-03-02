import {Login} from './Componentes/Login';
import './App.css';
import {Menu} from './Componentes/Menu';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {PrivateRoute, Authentification, LayoutMenu} from './Layout';

function App() {
  document.title = 'JFLS'

  
  //console.log(auth)
  return (
    <Router>
      <Switch>
        
        <Authentification exact path="/login" component={Login}/>
        <PrivateRoute path="/CLIENT" component={LayoutMenu} isRol = "CLIENT"/>
        <PrivateRoute path="/ADMIN" component={LayoutMenu} isRol = "ADMIN"/>
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

//TECH IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//STYLING IMPORTS
import './index.css';
import Logo from './AnywhereFitnessLogo.png';
//CUSTOM IMPORTS
import { LoginForm } from './components/login'
import { RegisterForm } from './components/register'

function App() {
  return (
    <>
      <div className="logoAndHeading"></div>
      <img className="logo" src={Logo} alt="gym barbell"/>
      <h1 className="mainHeading">Anywhere Fitness</h1>
      <Router>
        <Switch>
           <Route exact path="/" component={RegisterForm} />
           <Route path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

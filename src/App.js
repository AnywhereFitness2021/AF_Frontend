//TECH IMPORTS
import React from 'react';
//STYLING IMPORTS
import './index.css';
import Logo from './AnywhereFitnessLogo.png';
import { LoginForm } from './components/login'
import { RegisterForm } from './components/register'

function App() {
  return (
    <>
      <div className="logoAndHeading"></div>
      <img className="logo" src={Logo} alt="gym barbell"/>
      <h1 className="mainHeading">Anywhere Fitness</h1>
      <LoginForm></LoginForm>
      <RegisterForm></RegisterForm>
    </>
  );
}

export default App;

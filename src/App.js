//TECH IMPORTS
import React from 'react';
//STYLING IMPORTS
import './index.css';
import Logo from './AnywhereFitnessLogo.png';

function App() {
  return (
    <>
      <div className="logoAndHeading"></div>
      <img className="logo" src={Logo} alt="gym barbell"/>
      <h1 className="mainHeading">Anywhere Fitness</h1>
    </>
  );
}

export default App;

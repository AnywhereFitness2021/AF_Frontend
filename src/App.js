//TECH IMPORTS
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//STYLING IMPORTS
import './index.css';
import Logo from './AnywhereFitnessLogo.png';
import styled from 'styled-components';
//CUSTOM IMPORTS
import LoginForm from './components/login';
import RegisterForm from './components/register';
import CreateClassForm from './components/CreateClassForm';
import Client from './components/Client';
import Instructor from './components/Instructor';
import EditClassForm from './components/EditClassForm';
import Homepage from './components/Homepage';
import PrivateRoute from './components/PrivateRoute';
import OnboardClient from './components/onboarding/onboard-client';
import OnboardInstructor from './components/onboarding/onboard-instructor';

const StyledLink = styled(Link)`
  color: black;
  background-color: white;
  opacity: 80%;
  border: 2px #3a3a3a solid;
  text-decoration:none;
  position: absolute;
  right: 150px;
  padding: 10px;
  width: 6%;
  text-align:center;
  margin-top:.5%;
  font-size: 15px;
`

function App() {

  const [loggedOut, setLoggedOut] = useState(true); // false = logout button appears, true = logout button disappears
  
  const logout = () => {
    setLoggedOut(true);
    window.localStorage.removeItem('token');
  };

  return (
    <>
      <Router>
        <div className="logoAndHeading"></div>
        <img className="logo" src={Logo} alt="gym barbell"/>
        <h1 className="mainHeading">Anywhere Fitness</h1>
        {(loggedOut === false) && <StyledLink onClick={logout} to="/login">Logout</StyledLink>} 
          <Switch>
            <PrivateRoute exact path="/client" component={Client}/>
            <PrivateRoute exact path="/instructor" component={Instructor}/>
            <Route exact path="/addclass" component={CreateClassForm}/>
            <Route exact path="/editclass/:id" component={EditClassForm}/>
            <Route path="/login">
              <LoginForm loggedOut={loggedOut} setLoggedOut={setLoggedOut}/>
            </Route>
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={Homepage} />
          </Switch>
      </Router>
    </>
  );
}

export default App;

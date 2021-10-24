import React from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register';
import Navbar from './Components/Navbar/Navbar';

const App = () => {

  return (
    <Router>
    

      <main>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/home" exact>
            <Home/>
            <Navbar/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>

          <Redirect to="/"/>
        </Switch>
        
      </main>
    </Router>
  );
}

export default App;

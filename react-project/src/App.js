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
import Sidebar from './Components/Navbar/Sidebar';
import UNavbar from './Components/Navbar/UNavbar';

const App = () => {

  return (
    <Router>
    

      <main>
        <Switch>
          <Route path="/" exact>
            <UNavbar/>
            <Login/>
          </Route>
          <Route path="/home" exact>
            <UNavbar/>
            <Sidebar/>
            <Home/>
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

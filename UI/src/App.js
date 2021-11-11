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
import History from './pages/History/History';
import Services from './pages/Services/Services';
import Transfer from './pages/Transfer/Transfer';
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

          <Route path="/history" exact>
            <UNavbar/>
            <Sidebar/>
            <History/>
          </Route>

          <Route path="/services" exact>
            <UNavbar/>
            <Sidebar/>
            <Services/>
          </Route>
          
          <Route path="/transfer" exact>
            <UNavbar/>
            <Sidebar/>
            <Transfer/>
          </Route>

          {/* default = "/" */}
          <Redirect to="/"/>

        </Switch>
      </main>
    </Router>
  );
}

export default App;

//npm start
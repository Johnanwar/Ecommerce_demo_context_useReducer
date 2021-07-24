import './App.css';
import React from 'react'
import Navbar from '../../components/Navbar/index'
import 'react-toastify/dist/ReactToastify.css';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,}
from "react-router-dom";
import Home from '../../pages/home/Home';
import Cart from '../../pages/cart/cart';
function App() {
 







  return (
    <>
      <Router>
        <Navbar />
        <div style={{ paddingTop: '60px' }}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

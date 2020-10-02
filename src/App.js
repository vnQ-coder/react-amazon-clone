import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
        <div className="App">
        
          <Switch>
            <Route path="/checkout">
             <Header/>
             <Checkout/>
            </Route>
            <Route path="/login" component={Login}/>
            <Route path="/">
            <Header/>
            <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;


//Imports the application information.
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Imports the website pages.
import Login from './pages/Login';
import Listings from './pages/Listings';
import Post from './pages/Post';

//Imports the website components.
import Navigation from './components/Navigation';

function App(){
  return(
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/post" component={Post}/>
          <Route path="/" component={Listings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

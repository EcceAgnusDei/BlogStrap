import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './containers/Header';
import Users from './containers/Users';
import Home from './containers/Home';
import Posts from './containers/Posts';
import './css/style.min.css';
import '../node_modules/bootstrap/js/src/collapse.js'

function App() {
  return (
    <div>
      <Header brand="BRAND">
        <NavLink 
          exact 
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          to="/posts/1"
        >
          Posts
        </NavLink>
      </Header>
      <main className="container">
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/posts/:index' component={Posts} />
      </main>
    </div>
  );
}

export default App;

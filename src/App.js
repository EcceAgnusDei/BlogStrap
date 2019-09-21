import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './containers/Header';
import Users from './containers/Users';
import Home from './containers/Home';
import Posts from './containers/Posts';
import Dropdown from './components/Dropdown.js';
import { changeTheme } from './actions/themeActions'
import './css/style.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import themes from './libs/themes.js';

function App(props) {

  const themesJSX = themes.map(item => 
    <button key={item.name} onClick={() => props.changeTheme(item.name)}>{item.name}</button>
  )

  return (
    <div className="bg-light">
      <Header brand="BlogStrap" theme={props.theme}>
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
          to="/posts"
        >
          Posts
        </NavLink>
        <Dropdown buttonContent="Change Theme" theme={props.theme}>
          {themesJSX}
        </Dropdown>
      </Header>
      <main className="container mt-5">
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route exact path='/posts/:index' component={Posts} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/user:userId/:index' component={Posts} />
      </main>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: (theme) => dispatch(changeTheme(theme))
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

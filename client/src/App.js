import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Users from './views/Users';
import './App.css';

function App(props) {
  const signout = e => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    props.history.push('/signin');
  };
  return (
    <div className="App">
      <header>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/users">Users</NavLink>
        <button onClick={signout}>Sign Out</button>
      </header>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/users" component={Users}/>
    </div>
  );
}

export default withRouter(App);

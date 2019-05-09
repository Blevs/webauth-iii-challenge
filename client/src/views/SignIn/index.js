import React, { useState } from 'react';
import api from '../../api';

const SignIn = (props) => {
  const [error, setError] = useState(null);
  const onSubmit = e => {
    e.preventDefault();
    api.signin({
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        props.history.push('/users');
      })
      .catch(error => setError(error.response.data));
  };
  return (
    <form onSubmit={onSubmit}>
      {error && <div>{error.message}</div>}
      <input name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;

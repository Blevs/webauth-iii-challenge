import React, { useState } from 'react';
import api from '../../api';

const SignUp = (props) => {
  const [error, setError] = useState(null);
  const onSubmit = e => {
    e.preventDefault();
    api.signup({
      username: e.target.username.value,
      password: e.target.password.value,
      department: e.target.department.value,
    })
      .then(res => {
        props.history.push('/login');
      })
      .catch(error => setError(error.response.data));
  };
  return (
    <form onSubmit={onSubmit}>
      {error && <div>{error.message}</div>}
      <input name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <input name="department" placeholder="department"/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;

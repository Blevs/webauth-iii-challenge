import React, { useState, useEffect } from 'react';
import api from '../../api';

const Users = (props) => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.users()
      .then(res => setUsers(res.data))
      .catch(error => setError(error.response.data));
  }, []);
  return (
    <div>
      {error && <div>{error.message}</div>}
      {users.map(u => <div key={u.id}>{u.username}, {u.department}</div>)}
    </div>
  );
};

export default Users;

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

axios.interceptors.request.use(
  function(requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem('jwt');
    return requestConfig;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default {
  signup,
  signin,
  users
};

function signup(user) {
  return axios.post('/register', user);
}

function signin(creds) {
  return axios.post('/login', creds);
}

function users() {
  return axios.get('/users/');
}

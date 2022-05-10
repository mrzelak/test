import axios from 'axios';

class UserManager {
  username = null;
  token = null;

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setToken(token);
    }
  }

  setToken(token) {
    this.token = token;
    axios.defaults.headers.common = {
      Authorization: token,
    };

    if (localStorage.getItem('token') !== token) {
      localStorage.setItem('token', token);
    }
  }

  setUsername(username) {
    this.username = username;
  }

  getToken() {
    return this.token;
  }

  getUsername() {
    return this.username;
  }

  isLoggedIn() {
    return this.token !== null;
  }

  clear() {
    localStorage.removeItem('token');
    this.token = null;
    this.username = null;
  }
}

export default new UserManager();

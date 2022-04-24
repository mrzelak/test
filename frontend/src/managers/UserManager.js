class UserManager {
  username = null;
  token = null;

  setToken(token) {
    this.token = token;
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
    this.token = null;
    this.username = null;
  }
}

export default UserManager;

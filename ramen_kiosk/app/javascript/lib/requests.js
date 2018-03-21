const DOMAIN = 'http://localhost:3000';
const API_PREFIX = '/api/';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;
const getJWT = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbiJ9.qO0bvqbhfIfi-uOL8xA2Cu4JymA66B39Lt2yC6S-BaU";


// function getJWT() {
//   return localStorage.getItem('jwt');
// }

const Menu = {
  all () {
    return fetch(
      `${BASE_URL}/menus`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
    .then(res => res.json())
    .catch(console.log);
  },
  create(params) {

  }
}

const Token = {
  create (params) {
    return fetch(
      `${BASE_URL}/tokens`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
      .then(res => res.json());
  }
}

export { Menu, Token}

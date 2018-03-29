const DOMAIN = 'localhost:3000';
const API_PREFIX = '/api';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;
const getJWT = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImEiLCJsYXN0X25hbWUiOiJhIiwiZnVsbF9uYW1lIjoiYSBhIn0.Ptw0rU29pEiBOD51fH-8_jEv4hz84pcO8cxdbjU8YAM";

// HTTP REQUESTS

// function getJWT () {
//   return localStorage.getItem('jwt');
// }

// HTTP REQUESTS

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
      .then(res =>  {
        return res.json();
      })
  },
  one (id) {
    return fetch(
      `${BASE_URL}/menus/${id}`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
      .then(res => res.json());
  },
  create (params) {
    return fetch(
      `${BASE_URL}/menus`,
      {
        headers: {
          'Authorization': getJWT,
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
      .then(res => res.json())
  }
}


const Item = {
  all () {
    return fetch(
      `${BASE_URL}/items`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
      .then(res =>  {
        return res.json();
      })
  },
  one (id) {
    return fetch(
      `${BASE_URL}/items/${id}`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
      .then(res => res.json());
  }
}


const MenuItem = {
  all () {
    return fetch(
      `${BASE_URL}/menu_items`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
      .then(res =>  {
        return res.json();
      })
  },
  one (id) {
    return fetch(
      `${BASE_URL}/menu_items/${id}`,
      {
        headers: {
          'Authorization': getJWT
        }
      }
    )
      .then(res => res.json());
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


export { Menu, Item, Token };

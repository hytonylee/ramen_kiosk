import React from 'react';
import { Navbar } from 'reactstrap';


class Header extends React.Component {
  render() {
    return (
      <header className="top mt-3 d-flex flex-row d-flex justify-content-center">
        <h1>RAMEN </h1><h1 className="logo-circle">麵</h1><h1> KIOSK</h1>
      </header>
    )
  }
}

export default Header;

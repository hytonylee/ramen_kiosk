import React from "react";
import { Media } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <header className="pt-3 d-flex flex-column ">
        <div className="top d-flex justify-content-center d-flex flex-row">
          <h1>RAMEN </h1>
          <img src="https://goo.gl/5AdCrU" />
          <h1> KIOSK</h1>
        </div>
        <div className="top-banner">hello</div>
      </header>
    );
  }
}

export default Header;

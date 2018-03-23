import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


function NavMenu (props) {
  const { user, onSignOut = () => {} } = props;
  return(
    <div className="NavMenu">
      <Button color="dark" className="Nav-Select-Button" block>
        <NavLink exact to="/">Home</NavLink>
      </Button>
      <Button color="dark" className="Nav-Select-Button" block>
        <NavLink exact to="/menus">Menu</NavLink>
      </Button>
      <Button color="dark" className="Nav-Select-Button" block>
        <NavLink exact to="/menus/new" />Add Menu
      </Button>
      {
        user ? (
          <Button color="dark" className="Nav-Select-Button" block>
            <NavLink exact to="/sign_out">Sign Out</NavLink>
          </Button>
        ) : (
          <Button color="dark" className="Nav-Select-Button" block>
            <NavLink exact to="/sign_in">Sign In</NavLink>
          </Button>
        )
    }
    </div>
  )
}

export default NavMenu;

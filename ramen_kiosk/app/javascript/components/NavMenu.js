import React from 'react';
import { NavLink } from 'react-router-dom';


function NavMenu (props) {
  const { user, onSignOut = () => {} } = props;
  const handleSignOut = event => {
    event.preventDefault();
    onSignOut();
  }
  return (
    <div className="NavMenu">

      {
       user ? (
         [ <span key="1">Hello, {user.full_name}</span>
         , <a key="2" href="/sign_out" onClick={onSignOut} className="NavButton">Sign Out</a>
         ]
       ) : (
         <NavLink className="NavButton" exact to="/sign_in">Sign In</NavLink>
       )
     }
     <NavLink className="NavButton" exact to="/">Home</NavLink>
     <NavLink className="NavButton" exact to="/menus/">Menu</NavLink>
     <NavLink className="NavButton" exact to="/menus/new">New Menu</NavLink>





      {/* <Button color="dark" className="Nav-Select-Button" block>
        Home
      </Button>
      <Button color="dark" className="Nav-Select-Button" block>
        Menu
      </Button>
      <Button color="dark" className="Nav-Select-Button" block>
        Add Menu
      </Button>
      <Button color="dark" className="Nav-Select-Button" block href="/sign_out" onClick={handleSignOut}>
        Sign Out
      </Button> */}
    </div>
  )
}

export default NavMenu;

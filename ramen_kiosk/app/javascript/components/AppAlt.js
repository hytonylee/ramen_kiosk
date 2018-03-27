import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import {Row, Col} from 'reactstrap';


// Below is Authentication Component
import AuthRoute from './AuthRoute';

// Belows are pages components
import Header from './Header';
import Server from './Server';
import MenuNew from './MenuNew';
import MenuIndex from './MenuIndex';
import NavMenu from './NavMenu';
import SignIn from './SignIn';




class AppAlt extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      user: null
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount(){
    this.signIn();
  }

  signIn() {
    const jwt = localStorage.getItem('jwt');

    if(jwt) {
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  signOut() {
    localStorage.removeItem("jwt");
    this.setState({
      user: null
    })
  }

  isSignedIn() {
    return !!this.state.user;
  }

  render() {
    const { user } = this.state;
    return (
      <Router basename='/servers'>
        <div className="AppAlt">
          <Header />
          <Row>
            <Col xs="10">
              <Switch>
                <Route
                   exact
                   path="/sign_in"
                   render={props => <SignIn {...props} onSignIn={this.signIn} />}
                 />
                <AuthRoute
                  isAuthenticated={this.isSignedIn()}
                  exact
                  path="/menus" component={MenuIndex}
                />
                <AuthRoute
                  isAuthenticated={this.isSignedIn()}
                  path="/menus/new"
                  component={MenuNew}
                />
              </Switch>
            </Col>
            <Col xs="2">
              <NavMenu user={user}
              onSignOut={this.signOut}/>
            </Col>
          </Row>
        </div>
      </Router>
    )
  }

}

export default AppAlt;

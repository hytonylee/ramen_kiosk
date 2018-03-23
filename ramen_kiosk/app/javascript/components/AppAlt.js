import React, { Component } from 'react';
import Header from './Header'
import Server from './Server';
import MenuIndex from './MenuIndex';
import MenuNew from './MenuNew';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AuthRoute from './AuthRoute';
import { Row, Col } from 'reactstrap';
import NavMenu from './NavMenu';


class AppAlt extends Component {
  constructor (props) {
    super(props);
    console.log(props);

    this.state = {
      user: null
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount () {
    this.signIn();
  }

  signIn () {
    const jwt =  localStorage.getItem('jwt');

    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  signOut () {
    localStorage.removeItem('jwt');
    this.setState({user: null});
  }

  isSignedIn () {
    // !! to convert this.state.user into a boolean.
    return !!this.state.user;
  }

  render () {
    const { user } = this.state;

    // return (
    //   <Header />
    // )

    return (
      <Router basename='/servers'>
        <div className="AppAlt">

          <MenuNew />
          <Header />
          <Row>
            <Col xs="10" className="Menu-Wrapper">

              <MenuIndex />

            </Col>
            <Col xs="2" className="Nav-Selection">
                <NavMenu />
            </Col>
          </Row>











          {/* <NavBar
            user={user}
            onSignOut={this.signOut}
          /> */}
          {/*
            When wrapping routes inside of a Switch component,
            only the first Route that matches will be rendered.
          */}
          <Switch>
{/*
            <Header />
            <Row>
              <Col xs="10" className="Menu-Wrapper">

                <MenuIndex />

              </Col>
              <Col xs="2" className="Nav-Selection">
                  <NavMenu />
              </Col>
            </Row> */}




            {/* <Route exact path="/" component={Server} />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              exact
              path="/menus" component={MenuIndex}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/menus/new"
              component={MenuNew}
            /> */}
            {/* <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/menus/:id"
              component={QuestionShowPage}
            /> */}
            {/* <Route path="/sign_in" component={SignInPage} /> */}
            {/* <Route
              path="/sign_in"
              render={
                props => (
                  <SignInPage
                    {...props}
                    onSignIn={this.signIn}
                  />
                )
              }
            />
            <Route component={NotFoundPage} /> */}

          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppAlt;

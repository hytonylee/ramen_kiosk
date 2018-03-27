import React, { Component } from 'react';
import { Token } from '../lib/requests';

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createToken = this.createToken.bind(this);
  }

  createToken (event) {
    event.preventDefault();

    const { onSignIn = () => {} } = this.props;
    const formData = new FormData(event.currentTarget);

    Token
      .create({
        email: formData.get('email'),
        password: formData.get('password')
      })
      .then(data => {
        if (!data.errors) {
          localStorage.setItem('jwt', data.jwt);
          onSignIn()
          // .history is only available on props
          // because this component is rendered by a
          // route component.
          // (i.e. <Route route="/sign_in" component={SignInPage} />)
          this.props.history.push('/');
        } else {
          this.setState({
            errors: [{
              message: "Invalid username or password!"
            }]
          });
        }
      })
  }

  render () {
    const { errors } = this.state;
    return (
      <main
        className="SignInPage"
        style={{margin: '0 1rem'}}
      >
        <h2>Sign In</h2>
        {
          errors.map(
            (e, i) => <div className="alert" key={i}>{e.message}</div>
          )
        }
        <form onSubmit={this.createToken}>
          <div>
            <label htmlFor='email'>Email</label> <br />
            <input type='email' id='email' name='email'/>
          </div>

          <div>
            <label htmlFor='password'>Password</label> <br />
            <input type='password' id='password' name='password' />
          </div>

          <div>
            <input type='submit' value='Sign In'/>
          </div>
        </form>
      </main>
    )
  }
}

export default SignInPage;

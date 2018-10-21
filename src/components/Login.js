import React from 'react';
import Auth from '../utils/Auth'

class Login extends React.Component {
  login = () => {
    const auth = new Auth();
    auth.login();
  };

  render() {
    return (
      <div>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
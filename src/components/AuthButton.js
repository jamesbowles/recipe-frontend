import React from 'react';
import { withRouter } from 'react-router-dom';

const AuthButton = withRouter(
  // ({ history: history, auth: auth }) =>
  ({ history, auth }) =>
    auth.isAuthenticated() ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.logout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

export default AuthButton;
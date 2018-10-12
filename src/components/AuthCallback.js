import React, { Component } from "react";
import loadingImg from "../loading.svg";
import { Redirect } from "react-router-dom";

class Callback extends Component {
  state = {
    loading: true,
    result: null
  }

  async componentDidMount() {
    const { auth } = this.props;
    // const result = await auth.handleAuthentication();
    await auth.handleAuthentication();
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state

    if (loading === true) {
      return (
        <div>
          <img src={loadingImg} alt="loading" />
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

export default Callback;
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as authentication from '../api/auth-api';


const withAuth = (ComponentToProtect) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        data: null
      };
    }

    componentDidMount = async () => {
      try { 
        const cookies = document.cookie.split("; ");
        let jwt;
        for (let i = 0; i < cookies.length; i++) {
          const idx = cookies[i].indexOf("=");
          const cookie = cookies[i].slice(0, idx);
          if (cookie === "token") {
            jwt = cookies[i].slice(idx + 1);
            break
          }
        }
        const result = await authentication.authenticate({ token: jwt });
       
        if (result.status === 200) {
          this.setState({ loading: false, data: result.data });
        } else {
          const error = new Error("Error");
          throw error;
        }
      } catch (error) {
        console.log(error);
        this.setState({ loading: false, redirect: true });
      }
    }


    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        console.log("redirect")
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} data={this.state.data} />
        </React.Fragment>
      );
    }
  }
}

export default withAuth;
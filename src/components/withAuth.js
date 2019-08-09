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
        data: null,
        token: ""
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
            await this.setState({ token: jwt });
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
        this.setState({ loading: false, redirect: true });
      }
    }


    render() {
      const loading = this.state.loading;
      const redirect = this.state.redirect;
      if (loading) {
        return (
          <div className="row d-flex justify-content-center loading-row">
            <div className="spinner-grow loading text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} data={this.state.data} token={this.state.token} />
        </React.Fragment>
      );
    }
  }
}

export default withAuth;
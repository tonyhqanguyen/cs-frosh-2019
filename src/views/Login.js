import React from 'react';
import ParticleNetwork from '../components/particle-network';
import * as login from '../api/login-api';
import '../css/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        email: "",
        password: ""
      },
      loading: false,
      problem: false,
      problemMessage: "",
      recoverRequested: false,
      recoverRequestSuccess: false
    }
  }

  login = async (e) => {
    e.preventDefault();
    
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ problem: true, problemMessage: "Both your email and password are required. Please fill both." });
    }
    await this.setState({ loading: true });

    try {
      const result = await login.login(this.state.info);
      await this.setState({ loading: false });
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = `token=${result.data.token}`;
      console.log(this.props.history);
      this.props.history.push(result.data.role === "student" ? '/profile' : '/admin');
    } catch (error) {
      if (error.status === 401) {
        this.setState({ loading: false, problem: true, problemMessage: "The email and password combination you entered did not match any record on our files." });
      } else {
        this.setState({ loading: false, problem: true, problemMessage: "There was an error. Please try again later or email us at csorientation2019@gmail.com for help!" });
      }
    }
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  handleRecoverRequest = async (event) => {
    if (!this.state.recoverRequested) {
      await this.setState({ recoverRequested: true });
    } else {
      event.preventDefault();
      await this.setState({ problem: false, problemMessage: "", loading: true });
      try {
        await login.requestPasswordRecovery({ email: this.state.info.email });
        await this.setState({ loading: false, recoverRequestSuccess: true });
      } catch (error) {
        await this.setState({ loading: false, problem: true, problemMessage: error.data });
      }
    }
  }
  
  render() {
    return (
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <ParticleNetwork id="particles" classes="particles-network"/>
        </div>
        <div className="col-8 justify-content-center align-items-center d-flex">
          <div className="card login-card">
            <div className="card-body">
              <h1 className="login-instructions">{this.state.recoverRequested ? "Enter your email address to recover your account" 
              : "Login to manage your profile!"}</h1>
              {this.state.recoverRequestSuccess ? 
                <div className="alert alert-success alert-left" role="alert">
                  Please check your email for further steps!
                </div> : null
              }
              {this.state.problem ? 
                <div className="alert alert-danger alert-left" role="alert">
                  {this.state.problemMessage}
                </div> : null
              }
              {this.state.loading ? 
                <div className="row d-flex justify-content-center loading-row-login">
                  <div className="spinner-grow loading text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div> : null}
              {(!this.state.loading && !this.state.recoverRequestSuccess) ?  
              <form className="login-form" onSubmit={this.login.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" 
                          name="email"
                          value={this.state.info.email}
                          onChange={this.handleChange.bind(this)}
                          className="form-control" 
                          id="email" aria-describedby="email" 
                          placeholder="Enter email..."/>
                  </div>
                  {!this.state.recoverRequested ? <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                          name="password"
                          value={this.state.info.password}
                          onChange={this.handleChange.bind(this)}
                          className="form-control" 
                          id="password" 
                          placeholder="Password..."/>
                  </div> : null}
                  {!this.state.recoverRequested ? <button type="submit" className="btn btn-submit">Submit</button> : null}
                  <button type="button" className="btn btn-submit" onClick={this.handleRecoverRequest.bind(this)}>Recover</button>
                </form> : null}
            </div>
          </div>
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
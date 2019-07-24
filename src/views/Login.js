import React from 'react';
import ParticleNetwork from '../components/particle-network';
import * as login from '../api/login-api';
import '../css/login.css';

class Login extends React.Component {
  state = {
    info: {
      email: "",
      password: ""
    },
    loading: false,
    problem: false,
    problemMessage: ""
  }

  login = async (e) => {
    e.preventDefault();
    
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ problem: true, problemMessage: "Both your email and password are required. Please fill both." });
    }
    await this.setState({ loading: true });
    const result = await login.login(this.state.info);
    await this.setState({ loading: false });

    if (result.status === 200) {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = `token=${result.data}`;
      this.props.history.push('/profile');
    } else {
      this.setState({ problem: true, problemMessage: "The email and password combination you entered did not match any record on our files." });
    }
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
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
            <h1 className="login-instructions">Login to manage your profile!</h1>
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
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                       name="password"
                       value={this.state.info.password}
                       onChange={this.handleChange.bind(this)}
                       className="form-control" 
                       id="password" 
                       placeholder="Password..."/>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">Submit</button>
            </form>
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
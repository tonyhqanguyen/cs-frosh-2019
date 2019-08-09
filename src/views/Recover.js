import React from 'react';
import ParticleNetwork from '../components/particle-network';
import * as recover from '../api/recovery-api';
import '../css/login.css';

class Recover extends React.Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      token: url.slice(url.indexOf("token") + 6),
      password: {
        newPassword: "",
        confirmPassword: ""
      },
      loading: false,
      problem: false,
      problemMessage: "",
      success: false,
      fatal: false,
      fatalMessage: ""
    }
  }

  componentWillMount = async () => {
    try {
      if (!this.state.token.includes("/")) {
        await recover.verifyRecoverToken({ token: this.state.token });
      }
    } catch (error) {
      await this.setState({ fatal: true, fatalMessage: error.data });
    }
  }

  changePassword = async (e) => {
    e.preventDefault();
    
    if (this.state.password.newPassword.length < 8 || this.state.password.newPassword.length > 30) {
      await this.setState({ problem: true, problemMessage: `Your password needs to be 8-30 characters in length. Your password is currently ${this.state.password.newPassword.length} ${this.state.password.newPassword.length > 1  ? 'characters' : 'character'} long.` })
    } else {
      const passwordSplit = this.state.password.newPassword.split("");
      let upper, lower, num, sym;
      [upper, lower, num, sym] = [false, false, false, false];
      const symbols = "/^[!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]*$/";
      for (let i = 0; i < passwordSplit.length; i++) {
        if (!isNaN(passwordSplit[i] * 1)) {
          num = true;
        } else if (symbols.includes(passwordSplit[i])) {
          sym = true;
        } else if (passwordSplit[i] === passwordSplit[i].toLowerCase()) {
          lower = true;
        } else if (passwordSplit[i] === passwordSplit[i].toUpperCase()) {
          upper = true;
        } 

        if (upper && lower && num && sym) {
          break;
        }
      }

      if (!upper || !lower || !num || !sym) {
        await this.setState({ problem: true, problemMessage: "Your password needs to have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol. Please ensure you have satisfied this requirement." });
      } else {
        if (this.state.password.newPassword !== this.state.password.confirmPassword) {
          await this.setState({ problem: true, problemMessage: "The 2 passwords you entered do not match. Please try again." });
        } else {
          const info = { token: this.state.token, password: this.state.password.newPassword };
          this.setState({ loading: true, problem: false, problemMessage: "" });
          const resp = await recover.recoverPasswordStudent(info);
          
          if (resp.status === 200) {
            await this.setState({ loading: false,  success: true });
          } else {
            await this.setState({ loading: false, problem: true, problemMessage: resp.data })
          }
        }
      }
    }
  
  }

  handleChange = async (event) => {
    await this.setState({ password: { ...this.state.password, [event.target.name]: event.target.value } });
  }
  
  render() {
    const nonFatal = (
      <div>
        <h1 className="login-instructions">Choose your new password!</h1>
        {this.state.success ? 
          <div className="alert alert-success alert-left" role="alert">
            Your password has been changed successfully!
          </div> : null
          }
        {this.state.loading ? 
          <div className="row d-flex justify-content-center loading-row-login">
            <div className="spinner-grow loading text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> : null}
        {this.state.problem ? 
          <div className="alert alert-danger alert-left" role="alert">
            {this.state.problemMessage}
          </div> : null
        }
        {(!this.state.loading && !this.state.success) ? <form className="login-form" onSubmit={this.changePassword.bind(this)}>
          <div className="form-group">
            <label htmlFor="email">New password</label>
            <input type="password" 
                  name="newPassword"
                  value={this.state.password.newPassword}
                  onChange={this.handleChange.bind(this)}
                  className="form-control" 
                  id="email" aria-describedby="email" 
                  placeholder="Enter your new password..."/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Retype password</label>
            <input type="password" 
                  name="confirmPassword"
                  value={this.state.password.confirmPassword}
                  onChange={this.handleChange.bind(this)}
                  className="form-control" 
                  id="password" 
                  placeholder="Retype your password..."/>
          </div>
          <button type="submit" className="btn btn-submit">Submit</button>
        </form> : null}
      </div>
    )
    return (
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <ParticleNetwork id="particles" classes="particles-network"/>
        </div>
        <div className="col-8 justify-content-center align-items-center d-flex">
          <div className="card login-card">
            <div className="card-body">
              {this.state.fatal ? 
              <h1 className="alert-left bold-font">{this.state.fatalMessage}</h1> :
              nonFatal
              }
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

export default Recover;
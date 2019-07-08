import React from "react";
import ParticleNetwork from "../components/particle-network";
import "../css/activate.css";
import * as activation from "../api/activation-api";


class Activate extends React.Component {
  state = {
    info: {
      email: "",
      code: ""
    },
    problem: false,
    problemMessage: "",
    activated: false,
    password: {
      newPassword: "",
      confirmPassword: ""
    },
    passwordCreated: false,
    passwordProblem: false,
    passwordProblemMessage: "",
    passwordLoading: false
  }
  
  handleActivationChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  handlePasswordChange = async (event) => {
    await this.setState({ password: { ...this.state.password, [event.target.name]: event.target.value } });
    console.log(this.state.password);
  }

  activateAccount = async (e) => {
    e.preventDefault();
    if (!this.state.activated) {
      if (this.state.info.email === "" || this.state.info.code === "") {
        await this.setState({ problem: true, problemMessage: "Neither of the fields can be empty on submission. Please fill both fields." });
      } else {
        const resp = await activation.activateAccount(this.state.info);
        console.log(resp);
        if (resp === "Success") {
          await this.setState({ problem: false, problemMessage: "", activated: true });
        } else if (resp === "Incorrect code") {
          await this.setState({ problem: true, problemMessage: "The email and activation code combination doesn't match what we have on file. Please try again. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com." })
        } else if (resp === "Expired code") {
          await this.setState({ problem: true, problemMessage: "The activation code you entered has expired. Please re-register to get a new code." })
        } else if (resp === "Email not registered!") {
          await this.setState({ problem: true, problemMessage: "The email you entered has not been registered. Please register before activating your account. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com" })
        } else if (resp === "Account already created with code") {
          await this.setState({ problem: true, problemMessage: "The code you used has already been used to activate an account with the email you entered. This means you already have an account, please log in with your email and password. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com immediately!" });
        }
      }
    }
  }

  createAccount = async (e) => {
    e.preventDefault();
    if (!this.state.passwordCreated) {
      if (this.state.password.newPassword.length < 8 || this.state.password.newPassword.length > 30) {
        await this.setState({ passwordProblem: true, passwordProblemMessage: `Your password needs to be 8-30 characters in length. Your password is currently ${this.state.password.newPassword.length} characters long.` })
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
          await this.setState({ passwordProblem: true, passwordProblemMessage: "Your password needs to have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol. Please ensure you have satisfied this requirement." });
        } else {
          if (this.state.password.newPassword !== this.state.password.confirmPassword) {
            await this.setState({ passwordProblem: true, passwordProblemMessage: "The 2 passwords you entered do not match. Please try again." });
          } else {
            const info = { ...this.state.info, password: this.state.password.newPassword };
            this.setState({ passwordLoading: true });
            const resp = await activation.createPassword(info);

            if (resp === "Success") {
              await this.setState({ passwordCreated: true, passwordLoading: false });
            } else {
              this.setState({ passwordLoading: false })
            }
          }
        }
      }
    }
  }

  render() {
    const activationProblem = (
      <div className="alert alert-danger alert-left" role="alert">
          {this.state.problemMessage}
      </div>
    )

    const passwordProblem = (
      <div className="alert alert-danger alert-left" role="alert">
          {this.state.passwordProblemMessage}
      </div>
    )

    const notActivated = (
      <div>
        <h1 className="activation-instructions">Before we create your account, please enter the information required below.</h1>
        <form className="activation-form" onSubmit={this.activateAccount.bind(this)}>
          {this.state.problem ? activationProblem : null}
          <div className="form-group">
            <label htmlFor="activate-email">Email address: please enter the email you used to register for the orientation</label>
            <input type="email"
                    name="email"
                    value={this.state.info.email} 
                    onChange={this.handleActivationChange.bind(this)}
                    className="form-control form-font-size" 
                    id="activate-email" 
                    aria-describedby="activate-email" 
                    placeholder="Your email..."/>
          </div>
          <div className="form-group">
            <label htmlFor="activation-code">Activation code: please enter the activation code given to you via email. 
            If you do not have such activation code, please register first!</label>
            <input type="password" 
                    name="code"
                    value={this.state.info.code} 
                    onChange={this.handleActivationChange.bind(this)}
                    className="form-control form-font-size" 
                    id="activation-code" 
                    placeholder="Your activation code..."/>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            Submit
          </button>
        </form>
      </div>
    )

    const activated = (
      <div>
        <h1 className="activation-instructions">Before we create your account, please enter the information required below.</h1>
        <form className="activation-form" onSubmit={this.createAccount.bind(this)}>
          <div className="form-group">
            <label htmlFor="activate-email">Email address</label>
            <input type="email"
                    name="email"
                    value={this.state.info.email} 
                    readOnly
                    className="form-control form-font-size" 
                    id="activate-email" 
                    aria-describedby="activate-email" 
                    placeholder="Your email..."/>
          </div>
          <div className="form-group">
            <label htmlFor="activation-code">Activation code</label>
            <input type="password" 
                    name="code"
                    value={this.state.info.code} 
                    readOnly
                    className="form-control form-font-size" 
                    id="activation-code" 
                    placeholder="Your activation code..."/>
          </div>
        
            {this.state.passwordProblem ? passwordProblem :
            <div className="alert alert-success alert-left" role="alert">
              You have successfully authenticated. Please create your account by entering in your password below to activate your registration.
              Your password must be 8-30 characters long, and needs to have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol.
            </div>}
          <div className="form-group">
            <label htmlFor="new-password">Password: please enter your new password to create your account.</label>
            <input type="password"
                    name="newPassword"
                    value={this.state.password.newPassword} 
                    onChange={this.handlePasswordChange.bind(this)}
                    className="form-control form-font-size" 
                    id="new-password" 
                    aria-describedby="new-password" 
                    placeholder="Your new password..."/>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm password: please re-enter the password you gave above to confirm.</label>
            <input type="password" 
                    name="confirmPassword"
                    value={this.state.password.confirmPassword} 
                    onChange={this.handlePasswordChange.bind(this)} 
                    className="form-control form-font-size" 
                    id="confirm-password" 
                    placeholder="Re-enter your password..."/>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            Submit
          </button>
        </form>
      </div>
    )

    const passwordCreated = (
      <h1 className="account-created">Your account has been created successfully!</h1>
    )

    let activatedRender;
    if (this.state.passwordLoading) {
      activatedRender = (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    } else {
      activatedRender = this.state.passwordCreated ? passwordCreated : activated;
    }

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                { this.state.activated ? activatedRender : notActivated }
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

export default Activate;
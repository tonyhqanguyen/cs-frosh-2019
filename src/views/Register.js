import React from "react";
import ParticleNetwork from "../components/particle-network";
import * as registration from "../api/registration-api";
import "../css/register.css";
import RegisterConfirmation from "./RegisterConfirmation";

class Register extends React.Component {
  state = {
    info: {
      name: "",
      email: "",
      phone: "",
      shirt: "",
      diet: "",
      accom: ""
    },
    submitted: false,
    registered: false,
    problem: false,
    problemMessage: ""
  }

  register = async () => {
    let data;
    if (this.state.info.diet !== "" && this.state.info.accom !== "") {
      data = this.state.info;
    } else if (this.state.info.diet === "" && this.state.info.accom !== "") {
      data = { ...this.state.info, diet: "None" };
    } else if (this.state.info.accom === "" && this.state.info.diet !== "") {
      data = { ...this.state.info, accom: "None" };
    } else {
      data = { ...this.state.info, diet: "None", accom: "None" };
    }

    const resp = await registration.registerStudent(data);
    console.log("resp", resp);

    if (resp === "Registration email sent successfully!") {
      await this.setState({ registered: true, problem: false, problemMessage: "" })
    } else if (resp === "Email already exists") {
      await this.setState({ registered: false, problem: true, problemMessage: resp })
    }
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  setSubmittedTrue = () => {
    this.setState({submitted: true});
  }

  setSubmittedFalse = () => {
    this.setState({submitted: false});
  }

  render() {
    const registrationForm = (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.setSubmittedTrue.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="name-field">Full name</label>
                    <input type="name" 
                           name="name"
                           value={this.state.info.name}
                           onChange={this.handleChange}
                           className="form-control" 
                           id="name-field" 
                           placeholder="Your full name..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-field">Email address</label>
                    <input type="email" 
                          name="email"
                          value={this.state.info.email}
                          onChange={this.handleChange.bind(this)}
                          className="form-control" 
                          id="email-field" 
                          placeholder="Your email address..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-field">Phone number</label>
                    <input type="phone" 
                           name="phone"
                           value={this.state.info.phone}
                           onChange={this.handleChange.bind(this)}
                           className="form-control" 
                           id="phone-field" 
                           placeholder="Your phone number..."/>
                  </div>
                  <div className="form-check-label">
                    <label htmlFor="shirt-size">Shirt size</label>
                  </div>
                  <div className="form-check" id="shirt-size">
                    <input className="form-check-input" 
                           type="radio" 
                           name="shirt"
                           onChange={this.handleChange.bind(this)} 
                           id="xs" 
                           value="xtra-small"/>
                    <label className="form-check-label" htmlFor="xs">
                      XS
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" 
                           type="radio" 
                           name="shirt"
                           onChange={this.handleChange.bind(this)} 
                           id="sm" 
                           value="small"/>
                    <label className="form-check-label" htmlFor="sm">
                      S
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" 
                           type="radio" 
                           name="shirt" 
                           onChange={this.handleChange.bind(this)} 
                           id="md" 
                           value="medium"/>
                    <label className="form-check-label" htmlFor="md">
                      M
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" 
                           type="radio" 
                           name="shirt" 
                           onChange={this.handleChange.bind(this)} 
                           id="lg" 
                           value="large"/>
                    <label className="form-check-label" htmlFor="lg">
                      L
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" 
                           type="radio"
                           name="shirt" 
                           onChange={this.handleChange.bind(this)} 
                           id="xl" 
                           value="xtra-large"/>
                    <label className="form-check-label" htmlFor="xl">
                      XL
                    </label>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="food">Dietary restrictions</label>
                    <textarea className="form-control" 
                              id="food"
                              name="diet" 
                              value={this.state.info.diet}
                              onChange={this.handleChange.bind(this)} 
                              rows="3" 
                              placeholder="Please inform us of any dietary 
                              restrictions including allergies..."></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="accom">Accomodations</label>
                    <textarea className="form-control" 
                              id="accom" 
                              name="accom"
                              value={this.state.info.accom}
                              onChange={this.handleChange.bind(this)} 
                              rows="3" 
                              placeholder="Please inform us of any accomodations you 
                              will require..."></textarea>
                  </div>
                </form>
                <button type="button" className="btn btn-primary btn-submit"
                        onClick={this.setSubmittedTrue.bind(this)}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    )

    const confirmation = (
      <RegisterConfirmation register={this.register.bind(this)} back={this.setSubmittedFalse}
                            info={this.state.info} 
                            success={{ registered: this.state.registered, 
                                       problem: this.state.problem, 
                                       problemMessage: this.state.problemMessage }}/>
    )

    let renderElement = this.state.submitted ? confirmation : registrationForm;
    return (
      renderElement
    )
  }
}

export default Register;
import React from 'react';
import ParticleNetwork from '../components/particle-network';
import InfoForm from '../components/info';
import * as registration from '../api/registration-api';
import '../css/register.css';
import RegisterConfirmation from './RegisterConfirmation';

class Student extends React.Component {
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
    problemMessage: "",
    loading: false,
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

    await this.setState({ loading: true });
    const resp = await registration.registerStudent(data);
    await this.setState({ loading: false });
    console.log("resp", resp);

    if (resp.data === "Registration email sent successfully!") {
      await this.setState({ registered: true, problem: false, problemMessage: "" })
    } else if (resp.data === "Email already exists.") {
      await this.setState({ registered: false, problem: true, problemMessage: resp.data })
    }
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  setSubmittedTrue = async (e) => {
    e.preventDefault();
    if (this.state.info.name === "" || this.state.info.email === "" || this.state.info.phone === "" || this.state.shirt === "") {
      await this.setState({ problem: true, problemMessage: "The fields name, email, phone and shirt are required, please fill them all." });
    } else if (isNaN(this.state.info.phone)) {
      await this.setState({ problem: true, problemMessage: "Your phone number must be numeric." });
    } else {
      this.setState({ problem: false, problemMessage: "", submitted: true});
    }
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
            {this.state.problem ? 
              <div className="alert alert-danger" role="alert">
                {this.state.problemMessage}
              </div> : null}
              <InfoForm info={this.state.info}
                          this={this}
                          setSubmittedTrue={this.setSubmittedTrue}
                          handleChange={this.handleChange}
                          displayEmail={true}
                          loading={this.state.loading}
              />
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
                                       problemMessage: this.state.problemMessage }}
                            loading={this.state.loading}/>
    )

    let renderElement = this.state.submitted ? confirmation : registrationForm;
    return (
      renderElement
    )
  }
}

export default Student;
import React from 'react';
import ParticleNetwork from '../components/particle-network';
import * as registration from '../api/registration-api';
import '../css/club.css';


class Club extends React.Component {
  state = {
    info: {
      email: "",
      name: "",
      purpose: ""
    },
    loading: false,
    submitted: false,
    problem: false,
    problemMessage: "",
    result: ""
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  setSubmittedTrue = async (event) => {
    event.preventDefault();
    if (this.state.info.email === "" || this.state.info.name === "" || this.state.info.purpose === "") {
      await this.setState({ problem: true, problemMessage: "All fields are required. Please fill them all in." })
    } else {
      await this.setState({ problem: false, problemMessage: "", submitted: true });
    }
  }

  setSubmittedFalse = async () => {
    await this.setState({ submitted: false });
  }

  registerClub = async () => {
    await this.setState({ loading: true });
    try {
      const result = await registration.registerClub(this.state.info);
      console.log("result", result);
      await this.setState({ loading: false, result: result.data });
    } catch (error) {
      await this.setState({ loading: false, result: "There was an error with our server. Please try again later." });
    }
  }

  render() {

    const form = (
      <div className="card-body align-items-center">
        {this.state.problem ? <div className="alert alert-danger" role="alert">
          {this.state.problemMessage}
        </div> : null}
        <form className="club-form" onSubmit={this.setSubmittedTrue.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Club name</label>
            <input type="name" 
                    className="form-control"
                    name="name"
                    value={this.state.info.name}
                    readOnly={this.state.submitted}
                    onChange={this.handleChange.bind(this)} 
                    id="name" 
                    aria-describedby="nameHelp" 
                    placeholder="Enter your club's name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" 
                    className="form-control" 
                    name="email"
                    value={this.state.info.email}
                    readOnly={this.state.submitted}
                    onChange={this.handleChange.bind(this)} 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter your club's email contact."/>
          </div>
          <div className="form-group">
            <label htmlFor="purpose">What do you wish to do at this year's Orientation?</label>
            <textarea className="form-control" 
                id="purpose" 
                name="purpose"
                value={this.state.info.purpose}
                readOnly={this.state.submitted}
                onChange={this.handleChange.bind(this)} 
                rows="3" 
                placeholder="Please detail what you wish to do/accomplish at this year's Computer Science Orientation..."></textarea>
          </div>
          {this.state.submitted ? null : <button type="submit" className="btn btn-submit">Submit</button>}
        </form>
        {this.state.submitted ? 
        <div>
          <button type="submit" className="btn btn-submit" onClick={this.registerClub.bind(this)}>Confirm</button>
          <button type="submit" className="btn btn-submit" onClick={this.setSubmittedFalse.bind(this)}>Continue Editting</button> 
        </div> : null}
      </div>
    )

    const result = (
      <div>
        <h1 className="result-title">{this.state.result}</h1>
      </div>
    )

    const renderElement = (
    <div>
      {this.state.result === "" ? form : result}
    </div>
    )

    const loading = (
      <div className="card-body align-items-center">
        <div className="spinner-border">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 justify-content-center align-items-center d-flex">
            <div className="card club-card">
              {this.state.loading ? loading : renderElement}
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    )
    
  }
}

export default Club;
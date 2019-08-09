import React from 'react';
import ParticleNetwork from '../components/particle-network';
import InfoForm from '../components/info';
import * as profile from '../api/profile-api';
import { Redirect } from 'react-router-dom';
import '../css/profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      token: this.props.token,
      redirectAdmin: this.props.data.role === "admin",
      email: this.props.data.email,
      loading: false,
      problem: false,
      success: false,
      problemMessage: "",
      info: {
        accom: this.props.data.accom,
        diet: this.props.data.diet,
        name: this.props.data.name,
        phone: this.props.data.phone,
        shirt: this.props.data.shirt
      }
    }
  }

  setSubmittedTrue = async () => {
    if (!this.state.submitted) {
      await this.setState({ submitted: true, success: false, problem: false, problemMessage: "" });
    } else {
      await this.setState({ loading: true, success: false, submitted: false, problem: false, problemMessage: "" });
      try {
        const result = await profile.updateInfoStudent({ token: this.state.token, accountEmail: this.state.email, info: this.state.info });
        if (result.status === 200) {
          await this.setState({ loading: false, submitted: false, success: true });
        } else if (result.status === 401) {
          await this.setState({ loading: false, submitted: false, problem: true, problemMessage: "You can't change someone else's profile." });
        } else {
          await this.setState({ loading: false, submitted: false, problem: true, problemMessage: "There was an error, please try again later." });
        }
      } catch (error) {
        await this.setState({ loading: false, submitted: false, problem: true, problemMessage: "There was an error, please try again later." });
      }
    }
  }

  setSubmittedFalse = async () => {
    await this.setState({ submitted: false });
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  handleChangeCheckBox = async (event) => {
    await this.setState({ 
      info: { 
        ...this.state.info, diet: { 
          ...this.state.info.diet, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
      }
    });
  }
  
  logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    this.props.history.push("/");
  }

  render() {
    if (this.state.redirectAdmin) {
      return <Redirect to="/admin"/>
    }
    
    return (
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <ParticleNetwork id="particles" classes="particles-network"/>
        </div>
        <div className="col-8 justify-content-center align-items-center d-flex">
          <div className="card profile-card">
            <div className="card-body">
              {this.state.submitted ? 
              <div className="alert alert-info alert-left" role="alert">
                Please ensure you have entered everythingcorrectly and click Update again to confirm your request.
              </div> : null
              }
              {this.state.problem ? 
              <div className="alert alert-danger alert-left" role="alert">
                {this.state.problemMessage}
              </div> : null
              }
              {this.state.success ? 
              <div className="alert alert-success alert-dismissible fade show alert-left" role="alert">
                Your information has been updated successfully!.
              <button type="button" className="close" aria-label="Close" onClick={async () => {this.setState({ success: false })}}>
                  <span aria-hidden="true">&times;</span>
              </button>
              </div> : null
              }
              {this.state.loading ? 
              <div className="row d-flex justify-content-center loading-row">
               <div className="spinner-grow loading text-success" role="status">
                 <span className="sr-only">Loading...</span>
               </div>
              </div> : null
              }
              <InfoForm info={this.state.info}
                          this={this}
                          setSubmittedTrue={this.setSubmittedTrue}
                          setSubmittedFalse={this.setSubmittedFalse}
                          handleChange={this.handleChange}
                          handleChangeCheckBox={this.handleChangeCheckBox}
                          displayEmail={false}
                          logout={this.logout}
                          submitted={this.state.submitted}
                          />
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

export default Profile;
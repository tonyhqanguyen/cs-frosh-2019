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
      },
      checkInRequest: false,
      checkedIn: this.props.data.checkedIn,
      showCheckInSuccess: false
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
          await this.setState({ loading: false, submitted: false, success: true, problem: false, problemMessage: "" });
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

  checkIn = async () => {
    try {
      await this.setState({ loading: true });
      await profile.checkInStudent({ token: this.state.token, accountEmail: this.state.email });
      this.setState({ loading: false, checkInRequest: false, checkedIn: true, showCheckInSuccess: true, problem: false, problemMessage: "" });
    } catch (error) {
      await this.setState({ loading: false, problem: true, problemMessage: error.data });
    }
  }

  render() {
    if (this.state.redirectAdmin) {
      return <Redirect to="/admin"/>
    }
    
    return (
      <div className="container">
        <div className="modal fade sched-modal" id="confirmCheckIn" tabIndex="-1" role="dialog" aria-labelledby="confirmCheckIn" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmCheckIn">Check-in Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                You are about to check-in to the Computer Science Orientation 2019 at the University of Toronto, please click the 
                'Confirm' button below to confirm!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success bold-font" data-dismiss="modal" onClick={this.checkIn.bind(this)}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 justify-content-center align-items-center d-flex">
            <div className="card profile-card">
              <div className="card-body">
                {this.state.checkedIn && !this.state.showCheckInSuccess ? 
                <p className="alert-left bold-900">You have checked-in with the Computer Science Orientation 2019!</p> : null}
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
                  Your information has been updated successfully!
                <button type="button" className="close" aria-label="Close" onClick={async () => {this.setState({ success: false })}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> : null
                }
                {this.state.showCheckInSuccess ? 
                <div className="alert alert-success alert-dismissible fade show alert-left" role="alert">
                  You have successfully checked-in with the Computer Science Orientation 2019!
                <button type="button" className="close" aria-label="Close" onClick={async () => {this.setState({ showCheckInSuccess: false })}}>
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
                            checkedIn={this.state.checkedIn}
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
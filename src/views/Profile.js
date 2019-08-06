import React from 'react';
import ParticleNetwork from '../components/particle-network';
import InfoForm from '../components/info';
import { Redirect } from 'react-router-dom';
import '../css/profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectAdmin: this.props.data.role === "admin",
      email: this.props.data.email,
      info: {
        accom: this.props.data.accom,
        diet: this.props.data.diet,
        name: this.props.data.name,
        phone: this.props.data.phone,
        shirt: this.props.data.shirt
      }
    }
  }

  setSubmittedTrue = () => {
    this.setState({submitted: true});
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
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
              <InfoForm info={this.state.info}
                          this={this}
                          setSubmittedTrue={this.setSubmittedTrue}
                          handleChange={this.handleChange}
                          displayEmail={false}
                          logout={this.logout}
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
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import ParticleNetwork from '../components/particle-network';
import * as questions from '../api/questions-api';
import '../css/questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        email: props.location.state ? props.location.state.email : null,
        name: props.location.state ? props.location.state.name : null,
        question: ""
      },
      loading: false,
      problem: false,
      problemMessage: "",
      success: false
    }
  }

  handleChange = async (event) => {
    await this.setState({ info: { ...this.state.info, [event.target.name]: event.target.value } });
  }

  registerQuestion = async (e) => {
    e.preventDefault();
    try {
      await this.setState({ loading: true, problem: false, problemMessage: "" });
      await questions.registerQuestion(this.state.info);
      await this.setState({ loading: false, success: true });
    } catch (error) {
      await this.setState({ loading: false, problem: true, problemMessage: error.data });
    }
  }
  
  render() {
    const questionForm = (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 justify-content-center align-items-center d-flex">
            <div className="card login-card">
              <div className="card-body">
                {this.state.problem ? 
                <div className="alert alert-danger alert-left" role="alert">
                  {this.state.problemMessage}
                </div> : null
                }
                {this.state.success ? 
                <div className="alert alert-success alert-dismissible fade show alert-left" role="alert">
                  Your question has been submitted successfully.
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
                  </div> : 
                  <div>
                    <h1 className="questions-instructions">Enter your question below:</h1>
                    <form onSubmit={this.registerQuestion.bind(this)}>
                      <div className="form-group">
                        <label htmlFor="">Your question:</label>
                        <input type="input" 
                               className="form-control" 
                               id="questions" 
                               value={this.state.info.question}
                               name="question"
                               onChange={this.handleChange.bind(this)}
                               aria-describedby="questions" 
                               placeholder="Enter your question..."/>
                      </div>
                      <button type="submit" className="btn questions-button">Submit</button>
                    </form>
                  </div>
                }

              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    )
    return this.state.info.email ? questionForm : <Redirect to="/login" />;
  }
}

export default withRouter(Questions);
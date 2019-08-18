import React from 'react';
import ParticleNetwork from "../components/particle-network";


const RegisterConfirmation = (props) => {
  const confirmation = (
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <div className="confirmation">
                  <div className="confirmation-instruction">
                    Please review the information you have entered below. If anything 
                    is incorrect please return to the previous to page correct it.
                  </div>
                  <div className="text">
                    <p>Full name: {props.info.name}</p>
                    <p>Email address: {props.info.email}</p>
                    <p>Phone number: {props.info.phone}</p>
                    <p>Shirt size: 
                    {` ${props.info.shirt.charAt(0).toUpperCase()}${props.info.shirt.slice(1, props.info.shirt.length)}`}</p>
                    <p>Dietary restrictions: {props.info.diet.vegetarian ? "vegetarian" : ""} 
                                            {props.info.diet.vegan ? ", vegan" : ""}
                                             {props.info.diet.glutenFree ? `${(props.info.diet.vegetarian || props.info.diet.vegan) ? ', gluten-free' : 'gluten-free'}` : ""} 
                                             {props.info.diet.other ? `. You specified: ${props.info.diet.otherDiets}` : ""}</p>
                    <p>Accomodations: {props.info.accom === "" ? "None" : props.info.accom}</p>
                  </div>
                  <button type="button" className="btn btn-submit btn-confirm" onClick={props.register}>
                    Confirm and register
                  </button>
                  <button type="button" className="btn btn-submit btn-confirm" onClick={props.back}>
                    Return to registration page
                  </button>
                </div>           
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
  )

  const success = (
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <p className="success">
                  Thank you for registering for the Computer Science Orientation. We have sent an
                  email to you with regards to the next steps. To confirm your information and
                  activate your spot for the orientation, please follow the instructions in your
                  email. We want to ensure that you are the true owner of the email address given.
                  Once again, thank you and we look forward to seeing you at the event in September!
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
  )

  const emailTaken = (
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <p className="success">
                  Thank you for registering for the Computer Science Orientation. Unfortunately,
                  the email you used is already stored within our system, meaning that you might
                  have registered already. If you believe that this is an error, please contact us
                  at csorientation2019@gmail.com using the email you entered and describe this issue,
                  mentioning this message. We will be happy to help you out!
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
  )

  const deadlinePassed = (
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <p className="success">
                  Registration has closed. If you wish to be considered for the orientation, please send us an email at
                  csorientation2019@gmail.com explaining your situation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
  )

  const loading = (
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
  )

  let renderElement;
  if (props.loading) {
    renderElement = loading;
  }
  else if (props.success.registered && !props.success.problem) {
    renderElement = success;
  } else if (!props.success.registered && props.success.problem && props.success.problemMessage === "Email already exists.") {
    renderElement = emailTaken;
  } else if (!props.success.registered && props.success.problem && props.success.problemMessage === "Registration has closed") {
    renderElement = deadlinePassed;
  } else if (!props.success.registered && !props.success.problem) {
    renderElement = confirmation;
  }

  return (
    renderElement
  )
}

export default RegisterConfirmation;
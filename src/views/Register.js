import React from "react";
import ParticleNetwork from "../components/particle-network";
import "../css/register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <ParticleNetwork id="particles" classes="particles-network"/>
          </div>
          <div className="col-8 align-items-center d-flex">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name-field">Full Name</label>
                    <input type="name" className="form-control" id="name-field" placeholder="Your full name..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-field">Email address</label>
                    <input type="email" className="form-control" id="email-field" placeholder="Your email address..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-field">Phone number</label>
                    <input type="phone" className="form-control" id="phone-field" placeholder="Your phone number..."/>
                  </div>
                  <div className="form-check-label">
                    <label htmlFor="shirt-size">Shirt size</label>
                  </div>
                  <div className="form-check" id="shirt-size">
                    <input className="form-check-input" type="radio" name="select-size" id="xs" value="xtra-small"/>
                    <label className="form-check-label" htmlFor="xs">
                      XS
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="select-size" id="sm" value="small"/>
                    <label className="form-check-label" htmlFor="sm">
                      S
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="select-size" id="md" value="medium"/>
                    <label className="form-check-label" htmlFor="md">
                      M
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="select-size" id="lg" value="large"/>
                    <label className="form-check-label" htmlFor="lg">
                      L
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="select-size" id="xl" value="xtra-large"/>
                    <label className="form-check-label" htmlFor="xl">
                      XL
                    </label>
                  </div>
                  <p></p>
                  <div class="form-group">
                    <label htmlFor="food">Dietary restrictions</label>
                    <textarea className="form-control" id="food" rows="3" placeholder="Please inform us of any dietary 
                              restrictions including allergies..."></textarea>
                  </div>
                  <div className="form-check-label">
                    <label htmlFor="shirt-size">Will you be able to make POSt?</label>
                  </div>
                  <div className="form-check" id="shirt-size">
                    <input className="form-check-input" type="radio" name="select-size" id="nop" value="no" checked/>
                    <label className="form-check-label" htmlFor="nop">
                      No
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-2">
          </div>
        </div>
        {/* <div className="col-2"></div> */}
      </div>
    )
  }
}

export default Register;
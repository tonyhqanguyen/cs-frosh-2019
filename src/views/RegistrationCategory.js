import React from 'react';
import ParticleNetwork from '../components/particle-network';
import '../css/registration-category.css';
import Buttons from '../components/button-group';


const RegistrationCategory = () => {
  return(
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <ParticleNetwork id="particles" classes="particles-network"/>
        </div>
        <div className="col-8 justify-content-center align-items-center d-flex">
          <div className="card category-card">
            <div className="card-body align-items-center">
              <div className="row justify-content-center align-items-center d-flex category-row">
                <h1 className="category-heading">Are you registering as a club or incoming student?</h1>
                
                <Buttons names={["Club", "Student"]} 
                        routes={{ 0: "/club", 1: "/student" }}
                        class="btn-category"
                        outerClass="group-category"
                        vertical={true}
                        />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
  )
}

export default RegistrationCategory;
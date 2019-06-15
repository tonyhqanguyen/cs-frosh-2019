import React from "react";
import ParticleNetwork from "../components/particle-network";
import "../css/home.css";
import Buttons from "../components/button-group";

const Home = () => {
  return (
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="home">
						<div className="col-3">
							<ParticleNetwork id="particles" classes="particles-network"/>
						</div>
						<div className="col-6">
							<div className="row text-row">
								<h1 className="welcome-title">
									Computer Science Orientation 2019!
								</h1>
								<Buttons names={["Register", "Information"]}/>
							</div>
						</div>
						<div className="col-3"></div>
					</div>
				</div>
			</div>
    )
}

export default Home;
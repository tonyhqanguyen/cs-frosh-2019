import React from "react";
import ParticleNetwork from "../components/particle-network";
import "../css/home.css";
import Buttons from "../components/button-group";

const Home = () => {
  return (
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="home">
						<div className="col-2">
							<ParticleNetwork id="particles" classes="particles-network"/>
						</div>
						<div className="col-8">
							<div className="row text-row">
								<h1 className="welcome-title">
									<span>C</span>
									<span>o</span>
									<span>m</span>
									<span>p</span>
									<span>u</span>
									<span>t</span>
									<span>e</span>
									<span>r</span>
									<span> </span>
									<span>S</span>
									<span>c</span>
									<span>i</span>
									<span>e</span>
									<span>n</span>
									<span>c</span>
									<span>e</span>
									<span> </span>
									<span>O</span>
									<span>r</span>
									<span>i</span>
									<span>e</span>
									<span>n</span>
									<span>t</span>
									<span>a</span>
									<span>t</span>
									<span>i</span>
									<span>o</span>
									<span>n</span>
									<span> </span>
									<span>2</span>
									<span>0</span>
									<span>1</span>
									<span>9</span>
									<span>!</span>
								</h1>
								<Buttons names={["Register", "Information"]} 
												 routes={{0: "/register", 1: "/information"}}/>
							</div>
						</div>
						<div className="col-2"></div>
					</div>
				</div>
			</div>
    )
}

export default Home;
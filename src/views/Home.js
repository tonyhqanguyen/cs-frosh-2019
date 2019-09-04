import React from "react";
// import { connect } from 'react-redux';
// import { setToVisited } from '../actions'
import ParticleNetwork from "../components/particle-network";
import "../css/home.css";
import Buttons from "../components/button-group";


class Home extends React.Component {
	state = {
		loadAnimation: true,
		time: ""
	}

	stopAnimation = async () => {
		await this.setState({ loadAnimation: false });
	}

	createCookie = (name, value, minutes) => {
		let expires;
		if (minutes) {
			const date = new Date();
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		} else {
			expires = "";
		}
		document.cookie = `${name}=${value}${expires}; path=/`;
	}

	readCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') { 
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length, c.length);
				}
    }
    return null;
	}	

	componentDidMount = async () => {
		this.interval = setInterval(async () => {
			const time = new Date();
			await this.setState({ time: this.msToTime(1567866600000 - time.getTime()) });
		}, 1000);
	}

	componentWillMount = () => {
		if (!this.readCookie("animation-loaded")) {
			this.setState({ loadAnimation: true })
			this.createCookie("animation-loaded", "1", 1)
		} else {
			this.setState({ loadAnimation: false })
		}
	}

	msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
			days = Math.floor((duration / (1000 * 60 * 60 * 24)));
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return days + ":" + hours + ":" + minutes + ":" + seconds;
	}
	
	render() {
		let chars = [];
		for (let i = 0; i < this.state.time.length; i++) {
			chars.push(this.state.time[i]);
		}

		let classTitle = this.state.loadAnimation ? "welcome-title-animate" : "welcome-title";
		return (
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="home">
						<div className="col-1">
							<ParticleNetwork id="particles" classes="particles-network"/>
						</div>
						<div className="col-10">
							<div className="row text-row justify-content-center align-items-center d-flex">
								<h1 className="countdown">
									{chars.map(char => {
										return <span>{char}</span>;
									})}
								</h1>
								<h1 className={classTitle}>
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
								<Buttons names={["Register", "About", "Profile"]} 
												 routes={{ 0: "/register", 1: "/information", 2: "/profile" }}
													
												 click={this.stopAnimation.bind(this)}
												 animate={this.state.loadAnimation}/>
							</div>
						</div>
						<div className="col-1"></div>
					</div>
				</div>
			</div>
    )
	}
}

export default Home;
import React from "react";
import ParticleNetwork from "../components/particle-network";
import "../css/home.css";

const Home = () => {
    return (
        <div className="home">
            <h1 className="welcome-title">
                Computer Science Orientation 2019!
            </h1>
            <ParticleNetwork id="particles" classes="particles-network"/>
        </div>
    )
}

export default Home;
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Register from './views/Register';
import Activate from './views/Activate';

const Main = () => { 
	return (
		<div className="App">
			<Route exact path="/" render={() => <Home />}/>
			<Route exact path="/register" render={() => <Register />}/>
			<Route exact path="/activate" render={() => <Activate />}/>
		</div>    
	)
}

export default Main;
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Student from './views/Student';
import Club from './views/Club';
import Activate from './views/Activate';
import Information from './views/Information';
import Login from './views/Login';
import Profile from './views/Profile';
import RegistrationCategory from './views/RegistrationCategory';
import withAuth from './components/withAuth';

const Main = () => { 
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/register" component={RegistrationCategory}/>
				<Route path="/student" component={Student}/>
				<Route path="/club" component={Club}/>
				<Route path="/activate" component={Activate}/>
				<Route path="/information" component={Information}/>
				<Route path="/login" component={Login}/>
				<Route path="/profile" component={withAuth(Profile)}/>
			</Switch>
		</div>    
	)
}

export default Main;
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Student from './views/Student';
import Club from './views/Club';
import Activate from './views/Activate';
import Information from './views/Information';
import Login from './views/Login';
import Recover from './views/Recover';
import Profile from './views/Profile';
import RegistrationCategory from './views/RegistrationCategory';
import Admin from './views/Admin';
import Questions from './views/Questions';
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
				<Route path="/recover" component={Recover}/>
				<Route path="/profile" component={withAuth(Profile)}/>
				<Route path="/admin" component={withAuth(Admin)}/>
				<Route path="/questions" component={withAuth(Questions)}/>
			</Switch>
		</div>    
	)
}

export default Main;
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Register from './views/Register';
import Activate from './views/Activate';

const Main = () => { 
    return (
        <Route render={({location}) => (
            <Switch location={location}>
                <Route exact path="/" render={() => <Home />}/>
                <Route exact path="/register" render={() => <Register />}/>
                <Route exact path="/activate" render={() => <Activate />}/>
            </Switch>
        )} />      
    )
}

export default Main;
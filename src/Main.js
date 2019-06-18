import { Switch, Route } from "react-router-dom";
import React from 'react';
import Home from "./views/Home";
import Register from "./views/Register";

const Main = () => { 
    return (
        <Route render={({location}) => (
            <Switch location={location}>
                <Route exact path="/" render={() => <Home />}/>
                <Route exact path="/register" render={() => <Register />}/>
            </Switch>
        )} />      
    )
}

export default Main;
import { Switch, Route } from "react-router-dom";
import React from 'react';
import Home from "./views/Home";

const Main = () => { 
    return (
        <Route render={({location}) => (
            <Switch location={location}>
                <Route exact path="/" render={() => <Home />}/>
            </Switch>
        )} />      
    )
}

export default Main;
import React from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect
// } from "react-router-dom";
import { Route, Router, Switch } from "wouter";
import MainPage from './jsx/pages/MainPage'
function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />

                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
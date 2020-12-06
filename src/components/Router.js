import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import App from "./App";
import Home from "../routes/Home";
import Auth from "../routes/Auth";


const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
    <Router>
        <Switch>
            {isLoggedIn ? (
            <>
            <Route exact path="/">
                <Home />
            </Route>
            </>
            ) : (
                <Route exact path="/">
                    <Auth />
                </Route>
            )}
        </Switch>
    </Router>
    );
};

export default AppRouter;
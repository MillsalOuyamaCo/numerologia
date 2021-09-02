import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Dashboard/Home';
import LandingPage from './pages/LandingPage/LandingPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route
                path="/" exact component={LandingPage}
            />
            <Route
                path="/dashboard/home" exact component={Home}
            />
        </BrowserRouter>
    )
}

export default Routes;
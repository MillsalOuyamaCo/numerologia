import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Dashboard/Home';

function Routes() {
    return(
        <BrowserRouter>
            <Route 
                path="/dashboard/home" exact component={Home} 
            />
        </BrowserRouter>
    )
}

export default Routes;
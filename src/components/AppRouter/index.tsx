import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
            { routes.map( route => {
                return (
                    <Route exact path={route.path} render={route.renderer} key={route.renderer} />
                );
            }) }
            </Switch>
        </Router>
    );
};

export default AppRouter;
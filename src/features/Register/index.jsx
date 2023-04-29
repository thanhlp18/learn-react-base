import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

Register.propTypes = {

};

function Register(props) {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={match.path} component={RegisterPage} />
        </Switch>

    );
}

export default Register;
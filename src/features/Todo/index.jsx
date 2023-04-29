import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import NotFound from '../../components/NotFound'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch()

    return (
        <div>
            Todo Share UI
            <Switch>
                <Route path={match.path} component={ListPage} />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />

                <Route component={NotFound} />
            </Switch>
        </div >
    );
}

export default TodoFeature;
import React from 'react';
import {Provider} from 'react-redux';

// react router
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './projects/project_index_container';
import RewardIndexContainer from './rewards/reward_index_container';
import RewardFormContainer from './rewards/reward_form_container';
import ProjectFormContainer from './projects/project_form_container';
import ProjectShowContainer from './projects/project_show_container';

const Root = ({store}) => {

    const _ensureLoggedIn = (nextState, replace) => {
        const currentUser = store.getState().session.currentUser;
        if (!currentUser) {
            replace('/login');
        }
    };

    const _redirectIfLoggedIn = (nextState, replace) => {
        const currentUser = store.getState().session.currentUser;
        if (currentUser) {
            replace('/');
        }
    };

    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ProjectIndexContainer}/>
                    <Route path="/projects" component={ProjectIndexContainer}/>
                    <Route path="/projects/:projectId" component={ProjectShowContainer}/>
                    <Route path="/projects/:projectId/edit" component={ProjectFormContainer} />
                    <Route path="/projects/:projectId/rewards" component={RewardIndexContainer}/>
                    <Route path="/projects/:projectId/rewards/new" component={RewardFormContainer}/>
                    <Route path="/new" component={ProjectFormContainer}/>
                    <Route path="/login" component={SessionFormContainer}/>
                    <Route path="/login" component={SessionFormContainer}/>
                    <Route path="/signup" component={SessionFormContainer}/>
                </Route>
            </Router>
        </Provider>
    );
};

export default Root;

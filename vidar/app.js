/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//import 'sanitize.css/sanitize.css';


// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from 'containers/App/selectors';

import configureStore from './store';

// Import root app
import App from '../vidar/containers/App';
import MyPage from "../vidar/containers/MyPage";

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="mypage" component={MyPage}/>
          </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
  );
};

render(<div>Torsk</div>);

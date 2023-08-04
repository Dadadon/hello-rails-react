import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Greeting} />
        </Switch>
      </Provider>
    </Router>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
      </Switch>
    </Router>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

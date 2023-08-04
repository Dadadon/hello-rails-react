import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from '../App'; // Import the correct path to your App component

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" element={<App />} />
        </Switch>
      </Provider>
    </Router>
  );
});

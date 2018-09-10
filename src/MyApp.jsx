import React from 'react';
import PropTypes from 'prop-types'; // When I have to pass in props uncomment this
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Victor from './components/Victor';
import HomePage from './components/HomePage'

export default class MyApp extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/victor' component={Victor}/>
          <Route path='/' component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

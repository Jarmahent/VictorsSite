import React from 'react';
// import PropTypes from 'prop-types'; // When I have to pass in props uncomment this
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render () {
    return(
      <div className="App">
          <div><h1><Link to="/victor">Victor Route</Link></h1></div>
          THIS IS THE HOMEPAGE!
      </div>

    );
  }
}

export default HomePage;

// eslint jsx-one-expression-per-line: "error"

import React from 'react';
// import PropTypes from 'prop-types'; // When I have to pass in props uncomment this
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App">
      <h1>
        HomePage, press <Link to="/victor">Here</Link> to go to Victor route
      </h1>
    </div>
  );
};

export default HomePage;

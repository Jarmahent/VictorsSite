import React from 'react';
import './Victor.css';
import { Link } from 'react-router-dom';

const Victor = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Victors site</h1>

        <h1 className="App-title">Welcome to Victors site</h1>
        <h4 className="">
          <Link to="/">Click Here to go home!</Link>
        </h4>
      </header>
    </div>
  );
};

export default Victor;

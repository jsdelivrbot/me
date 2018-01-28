import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Masthead.css';

import logo from '../logo.svg';

const Masthead = () => {
  return (
    <div className="Masthead">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">CHRISVOGT.me</h2>
      <p className="lead">Software Engineer <span>in San Francisco</span></p>
    </div>
  );
};

export default Masthead;
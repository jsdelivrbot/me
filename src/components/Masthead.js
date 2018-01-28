import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Masthead.css';

import logo from '../logo.svg';

const Masthead = () => {
  return (
    <div className="Masthead">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">CHRISVOGT.me</h2>
      <span>Software Engineer in San Francisco</span>
    </div>
  );
};

export default Masthead;
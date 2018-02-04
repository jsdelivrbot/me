import React from 'react';

import '../styles/components/Masthead.css';

import logo from '../logo.svg';

const Masthead = () => {
  return (
    <div className="Masthead">
      <img src={ logo } className="App-logo" alt="logo" />
      <h2 className="App-title">CHRISVOGT.me</h2>
      <p className="lead">Software Engineer in San Francisco</p>
    </div>
  );
};

export default Masthead;
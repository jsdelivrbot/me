import React from 'react';

import '../styles/components/Jumbotron.css';

const Jumbotron = props => {
  const {
    children,
    headline,
    subhead
  } = props;
  return (
    <div className="Jumbotron text-white">
      {headline &&
        <h2 className="App-title">{ headline }</h2>
      }
      {subhead &&
        <p className="lead">{ subhead }</p>
      }
      { children }
    </div>
  );
};

export default Jumbotron;
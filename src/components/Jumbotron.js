import React from 'react';

import '../styles/components/Jumbotron.css';

const Jumbotron = props => {
  const {
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
    </div>
  );
};

export default Jumbotron;
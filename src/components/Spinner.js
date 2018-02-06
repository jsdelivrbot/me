import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../styles/components/Spinner.css';

const Spinner = () => {
  return (
    <svg class="Spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  );
};

export default Spinner;

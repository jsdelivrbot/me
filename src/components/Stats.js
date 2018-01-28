import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import '../styles/components/Stats.css';

const Stats = () => {
  return (
    <div className="Stats">
      <div className="d-flex justify-content-center">
        <div className="p-2">Flex item</div>
        <div className="p-2">Flex item</div>
      </div>
    </div>
  );
};

export default Stats;
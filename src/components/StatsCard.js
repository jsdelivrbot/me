import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

import '../styles/components/Projects.css';

const StatsCard = ({ children }) => {
  return (
    <Card className='StatsCard'>
      <CardBody>
        { children }
      </CardBody>
    </Card>
  );
};

StatsCard.propTypes = {
  children: PropTypes.node
}

export default StatsCard;
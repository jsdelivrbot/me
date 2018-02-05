import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'reactstrap';

import '../styles/components/StatsCard.css';

const StatsCard = ({ children }) => {
  return (
    <Card body className='StatsCard'>
      <CardText>
        { children }
      </CardText>
    </Card>
  );
};

StatsCard.propTypes = {
  children: PropTypes.node
}

export default StatsCard;
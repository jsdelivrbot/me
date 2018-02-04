import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

import '../styles/components/Projects.css';

const StatsCard = ({ children }) => {
  return (
    <Card body outline color='secondary' className='StatsCard'>
      { children }
    </Card>
  );
};

StatsCard.propTypes = {
  children: PropTypes.node
}

export default StatsCard;
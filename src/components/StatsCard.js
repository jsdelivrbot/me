import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

import '../styles/components/Projects.css';

const StatsCard = props => {
  return (
    <Card className='StatsCard'>
      <CardBody>
        { props.children }
      </CardBody>
    </Card>
  );
};

StatsCard.propTypes = {
  children: PropTypes.node
}

export default StatsCard;
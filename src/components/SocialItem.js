import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// import '../styles/components/SocialItem.css';

const SocialItem = props => {
  return (
    <li className="list-inline-item">
      <Link to='https://www.google.com'>
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </Link>
    </li>
  );
};

SocialItem.propTypes = {
  children: PropTypes.node
}

export default SocialItem;
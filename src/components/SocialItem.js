import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SocialItem = props => {
  const { 
    href,
    reactIcon
  } = props;
  return (
    <li className="list-inline-item">
      <Link to={ href }>
        <FontAwesomeIcon icon={["fab", reactIcon]} />
      </Link>
    </li>
  );
};

SocialItem.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reactIcon: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default SocialItem;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SocialItem = props => {
  const { 
    href,
    name,
    reactIcon
  } = props;
  return (
    <li className="list-inline-item">
      <a href={ href } title={ `Visit on ${name}` }>
        <FontAwesomeIcon icon={["fab", reactIcon]} />
      </a>
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
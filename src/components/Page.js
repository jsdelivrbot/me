import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Page.css';

const Page = props => {
  const { 
    children,
    name = 'default'
  } = props;
  return (
    <div className={ `Page page-${ name }` }>
      { children }
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string
};

export default Page;
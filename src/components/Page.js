import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import '../styles/components/Page.css';

const Page = props => {
  const { 
    children,
    name = 'default'
  } = props;
  return (
    <div>
      <Helmet>
        <title>{ name }</title>
      </Helmet>

      <div className={ `Page page-${ name }` }>
        { children }
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string
};

export default Page;
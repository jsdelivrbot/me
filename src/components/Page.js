import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import '../styles/components/Page.css';

const Page = (props, context) => {
  const { 
    children,
    name = 'default',
    title = ''
  } = props;

  context.mixpanel.track('Pageview', {
    'Page Name': name
  });

  return (
    <div className={ `Page page-${ name }` }>
      <Helmet>
        <title>{ title || name }</title>
      </Helmet>
      { children }
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string
};

Page.contextTypes = {
  mixpanel: PropTypes.object.isRequired
};

export default Page;
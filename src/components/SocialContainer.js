import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import Spinner from './Spinner';
import SocialItem from './SocialItem';

import '../styles/components/Social.css';

class Social extends Component {
  render() {
    const { isLoading, social } = this.props;
    const socialItems = Object.keys(social).map(item => {
      const socialItem = social[item];
      const props = {
        key: socialItem.slug,
        ...socialItem
      };
      return <SocialItem { ...props } />;
    });

    return (
      <div className="Social">
        <Container>
          <ul className='list-inline'>
            { isLoading && <Spinner /> }
            { !isLoading && socialItems }
          </ul>
        </Container>
      </div>
    );
  }
}

Social.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { social } = state;
  return {
    isLoading: !Object.keys(social).length,
    social
  }
};

export default connect(mapStateToProps)(Social);
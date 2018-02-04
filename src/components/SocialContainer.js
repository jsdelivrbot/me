import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import SocialItem from './SocialItem';

import '../styles/components/Social.css';

class Social extends React.Component {
  render() {
    const { social } = this.props;
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
            { socialItems }
          </ul>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { social } = state;
  return {
    social
  }
};

export default connect(mapStateToProps)(Social);
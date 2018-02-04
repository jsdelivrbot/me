import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import '../styles/components/Social.css';

class Social extends React.Component {
  render() {
    const { social } = this.props;
    return (
      <div className="Social">
        <Container>
          <ul className='list-inline'>
            <li class="list-inline-item">Lorem ipsum</li>
            <li class="list-inline-item">Phasellus iaculis</li>
            <li class="list-inline-item">Nulla volutpat</li>
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
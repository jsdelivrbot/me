import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import StatsCard from './StatsCard';

import '../styles/components/Stats.css';

class Stats extends React.Component {
  render() {
    const { projects, totalTimeInWords } = this.props;
    const projectCount = Object.keys(projects).length;
    return (
      <div className="Stats">
        <div className="d-flex justify-content-center">
          <StatsCard>
            { totalTimeInWords }
          </StatsCard>
          <StatsCard>
            { projectCount } Projects Published
          </StatsCard>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    projects,
    stats: { totalTimeInWords = '' }
  } = state;
  return {
    projects,
    totalTimeInWords
  }
};

export default connect(mapStateToProps)(Stats);

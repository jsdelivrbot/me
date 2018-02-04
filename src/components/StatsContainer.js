import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import StatsCard from './StatsCard';

import '../styles/components/Stats.css';

class Stats extends React.Component {
  render() {
    const { projects, totalTimeInWords } = this.props;
    const projectCount = Object.keys(projects).length;
    return (
      <div className="Stats">
        <Container className="d-flex justify-content-center">
          <StatsCard>
            { totalTimeInWords } coding personal projects this month
          </StatsCard>
          <StatsCard>
            { projectCount } projects published
          </StatsCard>
        </Container>
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

Stats.propTypes = {
  projects: PropTypes.object.isRequired,
  totalTimeInWords: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Stats);

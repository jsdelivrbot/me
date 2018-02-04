import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

Stats.propTypes = {
  projects: PropTypes.object.isRequired,
  totalTimeInWords: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Stats);

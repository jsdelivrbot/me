import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import '../styles/components/TitlePanel.css';

const TitlePanel = props => {
  const {
    title,
    subtitle
  } = props;
  return (
    <div className="TitlePanel">
      <Row>
        <Col className="text-md-left" xs="12" md="10">
          <h3>
            { title }
            {subtitle &&
              <small className="text-muted">{ subtitle }</small>
            }
          </h3>
        </Col>
        <Col xs="12" md="2">
          { props.right }
        </Col>
      </Row>
    </div>
  );
};

TitlePanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitlePanel;
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import '../styles/components/PageTitle.css';

const PageTitle = props => {
  const {
    title,
    subtitle
  } = props;
  return (
    <div className="PageTitle">
      <Container>
        <Row>
          <Col className="text-md-left">
            <h3>
              { title }
              {subtitle &&
                <small className="text-muted">{ subtitle }</small>
              }
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default PageTitle;
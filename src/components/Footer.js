import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col className='text-left'>
            Made with A + B by  @C1V0 in San Francisco, CA
          </Col>
          <Col className='text-right'>
            <a href='#'>Link One</a>
            <a href='#'>Link Two</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
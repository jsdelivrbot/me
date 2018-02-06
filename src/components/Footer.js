import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Quotes from './QuotesContainer';
import Social from './SocialContainer';

import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div>
      <Quotes />
      <Social />
      <div className="Footer bg-dark text-white">
        <Container>
          <Row>
            <Col xs='12'>
              <small>
                Made with <FontAwesomeIcon icon={['fal', 'code']} /> +{' '}
                <FontAwesomeIcon icon={['fal', 'heart']} />{' '}
                by Chris Vogt in San Francisco, CA
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
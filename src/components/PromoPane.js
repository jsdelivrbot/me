import React from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';

import '../styles/components/PromoPane.css';

const PromoPane = () => {
  return (
    <div className="PromoPane">
      <Container>
        <Row>
          <Col className="align-self-center" xs="12" md="8">
            <p className="Promo-text text-left">
              Review my coding habits from the last 30 days
            </p>
          </Col>
          <Col xs="12" md="4">
            <a href='https://stats.chrisvogt.me' title='Chris Vogt — developer stats'>
              <Button className='btn-elevated' block color='www btn-primary'>
                stats.chrisvogt.me
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoPane;
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
            <Button block color='www btn-primary'>
              stats.chrisvogt.me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoPane;
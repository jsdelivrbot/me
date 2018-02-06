import React from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';

import '../styles/components/PromoPane.css';

const PromoPane = props => {
  const {
    buttonText,
    linkTitle,
    linkURL,
    text
  } = props;
  return (
    <div className="PromoPane">
      <Container>
        <Row>
          <Col className="align-self-center" xs="12" md="8">
            <p className="Promo-text text-md-left">
              { text }
            </p>
          </Col>
          <Col xs="12" md="4">
            <a href={ linkURL } title={ linkTitle }>
              <Button className='btn-elevated' block color='www btn-primary'>
                { buttonText }
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoPane;
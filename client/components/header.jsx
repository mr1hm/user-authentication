import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container className="header-container" fluid={true}>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>{this.props.text}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

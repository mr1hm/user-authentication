import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Row className="bg-light flex-fill">
        <Col className="">
          <div className="welcome d-flex justify-content-center align-items-center">
            Welcome
            <img className="ml-3" src="images/welcome-logo.png" alt="" />
          </div>
        </Col>
      </Row>
    );
  }
}

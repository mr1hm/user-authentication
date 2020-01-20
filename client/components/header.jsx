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
      <h1>{this.props.text}</h1>
    );
  }
}

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        user: '',
        pw: ''
      },
      loginData: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleChange(e) {
    const name = e.target.name, value = e.target.value;
    this.setState(prevState => ({
      login: { ...prevState.login, [name]: value }
    }));
  }

  handleAuth() {
    fetch('/auth/google')
      .then(res => {
        console.log(res);
        res.text()
      })
      .then(loginData => this.setState({ loginData }))
      .catch(err => console.error(err));
  }

  render() {
    const { login, handleLogin } = this.props;
    if (!login) {
      return (
        <Container className="login-button-container">
          <Row>
            <Col className="d-flex justify-content-center">
              <a onClick={this.handleAuth} className="login-button">Login</a>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="login-container">
          <Row>
            <Col className="d-flex justify-content-center">
              <span className="login-title">Please Login</span>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <label className="login-user">User</label>
              <input name="user" onChange={this.handleChange} type="text" />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <label className="login-pw">Password</label>
              <input name="pw" onChange={this.handleChange} type="text" />
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Welcome from './welcome';
import Header from './header';
import Login from './login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      welcome: true,
      login: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    setTimeout(() => this.setState({ welcome: false }), 3000);
  }

  handleLogin() {
    this.setState({ login: !this.state.login });
  }

  getUsers() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
        console.log(users);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { welcome, users } = this.state;
    if (welcome) {
      return (
        <Container className="main bg-light d-flex" fluid={true}>
          <Welcome />
        </Container>
      );
    }
    return (
      <Container className="main bg-light" fluid={true}>
        <Header text="openmysesame" />
        <Login handleLogin={this.handleLogin} />
      </Container>
    );
  }
}

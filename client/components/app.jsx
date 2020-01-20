import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Welcome from './welcome';
import Header from './header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      welcome: true
    };
  }

  componentDidMount() {
    this.getUsers();
    setTimeout(() => this.setState({ welcome: false }), 3000);
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
      </Container>
    );
  }
}

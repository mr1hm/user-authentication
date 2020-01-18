import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
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
    return (
      <Header text="HELLO" />
    );
  }
}

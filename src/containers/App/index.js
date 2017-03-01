import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired
  };

  render() {
    return <p>Foo</p>;
  }
}

export default connect()(App);

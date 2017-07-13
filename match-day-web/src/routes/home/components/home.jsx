import React, { Component } from 'react';
import Button from 'md-button';

class Home extends Component {
  render() {
    return (
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Counter from './Counter';
import './CounterPage.scss';

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = { increment: 10 };
    this.randIncrement = this.randIncrement.bind(this);
  }

  randIncrement() {
    const increment = Math.floor(Math.random() * 50 + 1);
    this.setState({ increment });
  }

  render() {
    const { increment } = this.state;

    return (
      <div>
        <Counter increment={increment}/>
        <Counter increment={5}/>
        <button
          onClick={this.randIncrement}
          className="btn btn-primary"
        >
          Random first counter's increment
        </button>
      </div>
    );
  }
}

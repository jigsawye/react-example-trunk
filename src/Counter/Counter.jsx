import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.tick = this.tick.bind(this);
  }

  tick() {
    const { counter } = this.state;
    const { increment } = this.props;
    this.setState({
      counter: counter + increment,
    });
  }

  componentWillMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { increment } = this.props;
    const { counter } = this.state;
    return (
      <h1>
        Counter ({increment}): {counter}
      </h1>
    );
  }
}

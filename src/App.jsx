import { Component } from 'react';
import { Link } from 'react-router';
import './vendor/vendor.scss';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        React Example
        <div>
          <Link className="btn btn-success" to="/counter">counter</Link>
          <Link className="btn btn-danger" to="/about">about</Link>
        </div>
        {children}
      </div>
    );
  }
}

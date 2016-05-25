import React from 'react';
import { Link } from 'react-router';
import './vendor/vendor.scss';

export default ({ children }) =>
  <div>
    React Example
    <div>
      <Link className="btn btn-success" to="/counter">counter</Link>
      <Link className="btn btn-danger" to="/about">about</Link>
    </div>
    {children}
  </div>;

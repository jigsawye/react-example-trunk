require('vendor/vendor.scss');

var Router = require('react-router'),
  Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        React Example
        <div>
          <Link className="btn btn-success" to="/counter">counter</Link>
          <Link className="btn btn-danger" to="/about">about</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

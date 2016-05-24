var ReactDOM = require('react-dom');
var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  browserHistory = ReactRouter.browserHistory;

var routes = require('routes.jsx');

ReactDOM.render((
  <Router children={routes}  history={browserHistory}/>
), document.getElementById('root'));

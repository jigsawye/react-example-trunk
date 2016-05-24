var ReactRouter = require('react-router'),
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  Link = ReactRouter.Link;

var App = require('App.jsx');
var CounterPage = require('Counter/CounterPage.jsx');
var AboutPage = require('About/AboutPage.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={CounterPage}/>
    <Route path="counter" component={CounterPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

module.exports = routes;

import { Route, IndexRoute, Link } from 'react-router';
import App from './App';
import CounterPage from './Counter/CounterPage';
import AboutPage from './About/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CounterPage}/>
    <Route path="counter" component={CounterPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

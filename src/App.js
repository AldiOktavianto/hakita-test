import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import Public from "./components/public";
import Home from "./components/home";
import Blog from "./components/blog";
import Login from "./components/login";
import Signup from "./components/singup";

var routes = (
  <Route path='/' component={Public}>
    <IndexRoute component={Home} />
    <Route
      path='blog'
      component={Blog} />
    <Route
      path='signin'
      component={Login} />
    <Route
      path='signup'
      component={Signup} />
  </Route>
);

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}

export default App;

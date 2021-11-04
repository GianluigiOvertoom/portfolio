import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';

export default class App extends React.Component
{
  render()
  {
    return (
     <div id="app">
        <Router>
          
          <div className="header">
            <NavLink exact to="/" className="header-element" activeClassName="header-element-active">Home</NavLink>
            <NavLink exact to="/about" className="header-element" activeClassName="header-element-active">About</NavLink>
          </div>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/project" component={Project}/>
          </Switch>
        </Router>
     </div>
    );
  }
}
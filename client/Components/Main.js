import React, { Component } from  'react'
import Navbar from './Navbar'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

export default class Main extends Component {

  render() {
    return (
      <Router>
          <div>
            <div>
              <Navbar />
            </div>
            <div className="container-fluid">
              <div className="col-xs-2 leftBorder" />
              <div className="components col-xs-8">

                  <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/Contact" component={Contact} />
                  </Switch>
              </div>
              <div className="col-xs-2 rightBorder" />
            </div>
        </div>
      </Router>
            )
  }
}

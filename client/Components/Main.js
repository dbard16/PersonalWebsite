import React, { Component } from  'react'
import Navbar from './Navbar'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'

export default class Main extends Component {

  render() {
    return (
      <Router>
          <div>
          <div>
            <Navbar />
          </div>
          <div className="components">
            <Switch>
              <Route exact path="/About" component={About} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>

          </div>
        </div>
      </Router>
            )
  }
}

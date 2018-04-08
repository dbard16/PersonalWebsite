import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
/*
  render() {

    return (
            <nav className="navbar fixedTop">
              <div className="container">
                <div className="navbar-header">
              </div>
            </nav>


            )
  }
*/
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">DW</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/About" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/Projects" activeClassName="active">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}

import React, { Component } from 'react';

export default class Projects extends Component {

  render () {
    return (
      <div className="container-fluid" style={{margin: 0, paddingLeft: 0, paddingRight: 0}}>
        <div className="content">
          <h1 className="pageHeader"> Contact </h1>

        <button type="button"><a href="https://www.linkedin.com/in/dan-weissbard/" target="_blank"> <img src="./public/linkedin.png" /> </a></button>
        <button type="button"><a href="https://www.github.com/dbard16" target="_blank"> <img src="./public/github.png" /> </a></button>
        <button type="button"><a href="mailto:danweissbard@gmail.com" target="_top"> <img src="./public/gmail.png" /> </a></button>
      </div>
      </div>
    )

  }


}

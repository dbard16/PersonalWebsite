import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
export default class Projects extends Component {


  render () {
    return (
      <div className="container-fluid" style={{margin: 0, paddingLeft: 0, paddingRight: 0}}>
        <div className="content">
          <h1 className="pageHeader"> Projects </h1>

          <Fade bottom>
            <div>
              BarCast - https://djrc-api.herokuapp.com/#/
              Github Repos: https://github.com/cfitzgerald/DJRC-API
              https://github.com/ravishrawal/DJRC

            </div>

            <div>
              Grace Shopper
              https://github.com/drinkingChai/grace-shopper
            </div>

            <div>
              Choose Your Own Adventure
            </div>
          </Fade>

        </div>

      </div>
    )

  }


}

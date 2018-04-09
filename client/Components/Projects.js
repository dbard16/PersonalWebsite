import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
export default class Projects extends Component {


  render () {
    return (
      <div className="container-fluid" style={{margin: 0, paddingLeft: 100, paddingRight: 100}}>
        <div className="content">
          <h1 className="pageHeader"> Projects </h1>
          <hr />
          <Fade bottom>
            <div>
            <p>
              <a href="https://djrc-api.herokuapp.com/#/"> BarCast</a>
              <br />
              Mobile app built with react native that shows what genre of music bars are playing in the area
              <br />
              <br />
              Additional Github Repos:
              <br />
              <a href="https://github.com/cfitzgerald/DJRC-API"> API </a>
              <br />
              <a href="https://github.com/ravishrawal/DJRC"> React Native </a>
            </p>

            </div>
            <hr />

            <div>
              <p>
              <a href="https://github.com/drinkingChai/grace-shopper" >Grace Shopper </a>
              <br />
              Merchant website with passport, shopping carts, and admin functionality built using React-Redux
              </p>
            </div>
            <hr />

            <div>
              <p>
              <a href="https://github.com/dbard16/Stackathon/tree/master">Choose Your Own Adventure </a>
              <br />
              Choose your own adventure game built using react and Socket.IO allowing users to track their opponent's progress

              </p>
            </div>
          </Fade>

        </div>

      </div>
    )

  }


}

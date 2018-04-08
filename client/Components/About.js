import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
export default class About extends Component {


  render () {
    return (
      <div className="container-fluid">

          <h1 className="pageHeader"> About </h1>
          <div className="content">
          <Fade bottom>
            <h2 className="subHeader"> A History of Me </h2>
            <p> I've always had an interest in computers. I still remember playing games on 5 1/4" floppy disks (Damn you Alley Cat, do a better job explaining how you work to 5 year old me) and building my own computer with my brothers' help. Life took me down a non-computer related path in college, but I soon realized that my favorite part of my jobs were building macros or automating processes. I made the plunge and signed up for Fullstack Academy in 2017, and here we are today. A young (I can still call myself that until I turn 30 in October), aspiring, software developer looking to make an impact in a new and exciting role. </p>

            <h2 className="subHeader"> Technical Abilities </h2>
              <h3>Proficient</h3>  <p>JavaScript, Sequelize, Express, React, Node.js, Git, HTML, VBA, PSQL, Redux</p>
              <h3>Familiar</h3>  <p>jQuery, Bootstrap, Socket.IO, React Native, Bootstrap, CSS, Mocha, Chai, Heroku </p>
          </Fade>

        </div>

      </div>
    )

  }
}




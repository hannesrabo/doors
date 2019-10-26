import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Door from '../components/door'

import sendToSheets from '../util/gform'

import BACKEND_URL from '../env-config'

export default class Home extends Component {

  // The constructor sets up the state that is needed for the page 
  // before we try to utilize it.
  constructor(props) {
    super(props)

    // this.state is a special type of variable that is used for things that are 
    // supposed to update the page. As soon as anything changes in this.state,
    // the entire component is redrawn which means that new things might appear based
    // on values in it.
    this.state = {
      openDoor: -1,
      numberOfClicks: 10,
      points: 0,
    }

    // Everything starting with this (which refers to the component) is available
    // everywhere within it.
    this.doors = [
      1, 2, 3
    ]

    this.doorsClickedNumberOfTimes = this.doors.map(() => 0)

    this.numberOfDoorsOpened = 0

  }

  // This is a normal function which can be called for example when you click on a door.
  doorClicked = (doorNumber) => {
    if (doorNumber) {
      var points = this.state.points
      if (this.state.openDoor == doorNumber) {
        points += 1
      } else {
        this.numberOfDoorsOpened += 1
      }

      this.doorsClickedNumberOfTimes[doorNumber - 1] += 1

      console.log("numberOfDoorsOpened: " + this.numberOfDoorsOpened)
      console.log("doorsClicked: " + this.doorsClickedNumberOfTimes)

      this.setState({
        openDoor: doorNumber,
        numberOfClicks: this.state.numberOfClicks - 1,
        points: points,
      })
    }
  }

  stopGame = () => {
    console.log("Game ended")
    sendToSheets({
      door_openings: this.numberOfDoorsOpened,
      clicked_1: this.doorsClickedNumberOfTimes[0],
      clicked_2: this.doorsClickedNumberOfTimes[1],
      clicked_3: this.doorsClickedNumberOfTimes[2],
      points: this.state.points,
    })
    // Router.push(BACKEND_URL + '/index')
  }

  // This is the primary method of the component. It returns the page which is then displayed
  render() {

    if (this.state.numberOfClicks < 1) {
      this.stopGame()
    }

    return (
      <div>
        {/* In the head you have mostly meta data about the site */}
        <Head>
          <title>Game</title>
          <link rel='icon' href='/static/favicon.ico' importance='low' />
        </Head>

        <div className='hero'>
          <h1 className='title'>Welcome to the Door Game!</h1>
          <p className='description'>
            To get started, press the button below. Good luck!
          </p>

          <p>{this.state.numberOfClicks}</p>

          <div className='row'>
            {
              // Map goes though a list and returns one value for each element in the list
              // Here we use it to create a lot of doors using the properties in the list.
              this.doors.map(doorNr => (
                <Door
                  key={doorNr}
                  doorNumber={doorNr}
                  doorClicked={this.doorClicked}
                  open={this.state.openDoor === doorNr ? true : undefined}
                />
              ))
            }
          </div>

          {/* The button is just an example as it has a natural easy way of interacting with it */}
          <button onClick={() => {
            // This is an example of how you could send data to a sheet.
            // Use this function elsewhere to send data when it is available
            // sendToSheets({
            //   "test_1": "data &´+=",
            //   "test_2": 1,
            //   "test_3": "d ata@ä ",
            // })

            console.log(this.state.openDoor)
          }}>Send To Sheets</button>

          <div>
            <p>Points: {this.state.points}</p>
          </div>
        </div>

        {/* This is styling for the document and can be ignored for the most part */}
        <style jsx>{`
          document {
            font-family: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif"
          }
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    )
  }
}

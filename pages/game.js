import React, { Component } from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import Door from '../components/door'
import sendToSheets from '../util/gform'

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
    }

    // Everything starting with this (which refers to the component) is available
    // everywhere within it.
    this.doors = [
      1, 2, 3
    ]
  }

  // This is a normal function which can be called for example when you click on a door.
  doorClicked = (doorNumber) => {
    console.log("Clicked: " + doorNumber)

    if (doorNumber)
      this.setState({
        openDoor: doorNumber,
      })
  }

  // This is the primary method of the component. It returns the page which is then displayed
  render() {
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
            sendToSheets({
              "test_1": "data &´+=",
              "test_2": 1,
              "test_3": "d ata@ä ",
            })
          }}>Send To Sheets</button>
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

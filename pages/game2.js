import React, { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import Door from "../components/door";

import sendToSheets from "../util/gform";

import BACKEND_URL from "../env-config";
import pointsUtils from "../util/point";

export default class Home extends Component {
  // The constructor sets up the state that is needed for the page
  // before we try to utilize it.
  constructor(props) {
    super(props);

    // this.state is a special type of variable that is used for things that are
    // supposed to update the page. As soon as anything changes in this.state,
    // the entire component is redrawn which means that new things might appear based
    // on values in it.
    this.state = {
      openDoor: -1,
      numberOfClicks: 50,
      points: 0,
      clicksLeft: [7, 7, 7],
      newPoints: ""
    };

    // Everything starting with this (which refers to the component) is available
    // everywhere within it.
    this.doors = [1, 2, 3];

    this.pointsFunctions = [
      () => pointsUtils.pointsNormal(3, 2.5),
      () => pointsUtils.pointsNormal(3, 0.5),
      () => pointsUtils.pointsChi(4)
    ];

    this.doorsClickedNumberOfTimes = this.doors.map(() => 0);

    this.numberOfDoorsOpened = 0;
    this.gameRunning = true;
  }

  componentDidMount = () => {
    this.userID = sessionStorage.getItem("userid");
    console.log("Userid: " + this.userID);
  };

  // This is a normal function which can be called for example when you click on a door.
  doorClicked = doorNumber => {
    if (doorNumber && this.state.clicksLeft[doorNumber - 1] > 0) {
      var newPointsStr = "";
      var points = this.state.points;
      if (this.state.openDoor == doorNumber) {
        var p = this.pointsFunctions[doorNumber - 1]();
        newPointsStr = "+ " + p.toFixed(2);
        points += p;
      } else {
        this.numberOfDoorsOpened += 1;
      }

      var newClicksLeft = this.state.clicksLeft.map((count, index) => {
        if (index != doorNumber - 1)
          if (count <= 0) return 0;
          else return count - 1;
        else return 8;
      });
      console.log(newClicksLeft);
      this.doorsClickedNumberOfTimes[doorNumber - 1] += 1;

      console.log("numberOfDoorsOpened: " + this.numberOfDoorsOpened);
      console.log("doorsClicked: " + this.doorsClickedNumberOfTimes);

      this.setState({
        openDoor: doorNumber,
        numberOfClicks: this.state.numberOfClicks - 1,
        points: points,
        clicksLeft: newClicksLeft,
        newPoints: newPointsStr
      });
    }
  };

  stopGame = () => {
    if (this.gameRunning) {
      this.gameRunning = false;
      console.log("Game ended");
      sendToSheets({
        level: 2,
        user_id: this.userID,
        door_openings: this.numberOfDoorsOpened,
        clicked_1: this.doorsClickedNumberOfTimes[0],
        clicked_2: this.doorsClickedNumberOfTimes[1],
        clicked_3: this.doorsClickedNumberOfTimes[2],
        points: this.state.points
      });
      Router.push(BACKEND_URL + "/end");
    }
  };

  // This is the primary method of the component. It returns the page which is then displayed
  render() {
    if (this.state.numberOfClicks < 1) {
      this.stopGame();
    }

    return (
      <div>
        {/* In the head you have mostly meta data about the site */}
        <Head>
          <title>Game</title>
          <link rel="icon" href="/static/favicon.ico" importance="low" />
        </Head>

        <div className="hero">
          <h1 className="title">Nivå 2</h1>
          <p className="description">
            Klicka på dörrarna för att öppna dem och klicka på knappen på
            respektive dörr för att samla poäng.
          </p>
          <p className="description">
            Om man låter en dörr vara o-klickad för länge så kommer dörren inte
            att gå att öppna längre, det låser sig.
          </p>
          <p className="description">
            Den röda skylten på dörrarna visar hur långt det är kvar tills
            dörren i fråga låses.
          </p>

          <p className="pointsSection">
            Clicks left: {this.state.numberOfClicks}
          </p>
          <div className="row">
            {// Map goes though a list and returns one value for each element in the list
            // Here we use it to create a lot of doors using the properties in the list.
            this.doors.map(doorNr => (
              <Door
                key={doorNr}
                doorNumber={doorNr}
                doorClicked={this.doorClicked}
                open={this.state.openDoor === doorNr ? true : undefined}
                clicksLeft={this.state.clicksLeft[doorNr - 1]}
              />
            ))}
          </div>

          <div>
            <p className="pointsSection">
              Points: {this.state.points.toFixed(2)}
            </p>
            <p className="newPoints">{this.state.newPoints}</p>
          </div>
        </div>

        {/* This is styling for the document and can be ignored for the most part */}
        <style jsx>{`
          document {
            font-family: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif";
          }

          .pointsSection {
            font-size: 30px;
            text-align: center;
          }

          .newPoints {
            text-align: center;
            font-size: 25px;
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
    );
  }
}

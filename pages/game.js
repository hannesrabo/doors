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
      numberOfClicks: 100,
      points: 0,
      newPoints: ""
    };

    // Everything starting with this (which refers to the component) is available
    // everywhere within it.
    this.doors = [1, 2, 3];

    /*Här ändrar man poängfördelningen för de olika dörrarna. Överst är längst till vänster osv.*/
    this.pointsFunctions = [
      () => pointsUtils.pointsNormal(3, 0.5),
      () => pointsUtils.pointsChi(4),
      () => pointsUtils.pointsNormal(2.9, 2.5)
    ];

    this.doorsClickedNumberOfTimes = this.doors.map(() => 0);

    this.numberOfDoorsOpened = 0;
    this.gameRunning = true;
  }

  componentDidMount = () => {
    if (!this.userID) {
      this.userID = sessionStorage.getItem("userid");
      if (!this.userID) {
        sessionStorage.setItem("userid", pointsUtils.UUID());
        this.userID = sessionStorage.getItem("userid");
        console.log("Userid: " + this.userID);
      }
    }
  };

  // This is a normal function which can be called for example when you click on a door.
  doorClicked = doorNumber => {
    if (doorNumber && this.gameRunning) {
      var newPointsStr = "";
      var points = this.state.points;
      if (this.state.openDoor == doorNumber) {
        var p = this.pointsFunctions[doorNumber - 1]();
        newPointsStr = "+ " + p.toFixed(2);
        points += p;
      } else {
        this.numberOfDoorsOpened += 1;
      }

      this.doorsClickedNumberOfTimes[doorNumber - 1] += 1;

      console.log("numberOfDoorsOpened: " + this.numberOfDoorsOpened);
      console.log("doorsClicked: " + this.doorsClickedNumberOfTimes);

      this.setState({
        openDoor: doorNumber,
        numberOfClicks: this.state.numberOfClicks - 1,
        points: points,
        newPoints: newPointsStr
      });
    }
  };

  stopGame = () => {
    if (this.gameRunning) {
      this.gameRunning = false;
      console.log("Game ended");

      sessionStorage.setItem("game_1", this.state.points);

      sendToSheets({
        level: 1,
        user_id: this.userID,
        door_openings: this.numberOfDoorsOpened,
        clicked_1: this.doorsClickedNumberOfTimes[0],
        clicked_2: this.doorsClickedNumberOfTimes[1],
        clicked_3: this.doorsClickedNumberOfTimes[2],
        points: this.state.points
      });
      Router.push(BACKEND_URL + "/nextlevel");
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
          <h1 className="title">Nivå 1</h1>
          <p className="description">
            Klicka en gång på en av dörrarna för att öppna dörren.
          </p>
          <p className="description">
            Klicka på den blå knappen för att få poäng.
          </p>
          <p className="description">
            De olika dörrarna ger slumpmässigt antal poäng men den genomsnittliga poängen för varje dörr är olika.
          </p>

          <p className="pointsSection">
            Antal återstående klick: {this.state.numberOfClicks}
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
                />
              ))}
          </div>

          <div>
            <p className="pointsSection">
              Poäng: {this.state.points.toFixed(2)}
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

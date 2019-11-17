import React, { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";

import sendToSheets, { USER_DATA_URL} from "../util/gform";
import pointsUtils from '../util/point'

import BACKEND_URL from "../env-config";

export default class Home extends Component {
  // The constructor sets up the state that is needed for the page
  // before we try to utilize it.
  constructor(props) {
    super(props);

    this.ageInput = undefined;
    this.genderInput = undefined;
  }

  componentDidMount = () => {
    if (!this.userID) {
      sessionStorage.setItem("userid", pointsUtils.UUID());
      this.userID = sessionStorage.getItem("userid");
      console.log("Userid: " + this.userID);
    }
  };

  sendPersonalInformation = () => {
    sendToSheets({
		user_id: this.userID,
		gender: this.genderInput.value,
		age: this.ageInput.value
	}, USER_DATA_URL)
	
	Router.push(BACKEND_URL + "/game")
  };

  render() {
    return (
      <div>
        <Head>
          <title>Info</title>
          <link rel="icon" href="/static/favicon.ico" importance="low" />
        </Head>

        <div className="hero">
          <h1 className="title">Information om dig</h1>
          <p className="description">
            För att vi ska veta mer om hur olika grupper agerar i spelet så
            samlar vi in information om dina egenskaper.
          </p>
          <p className="description">
            Om du har några frågor så är det bara att fråga Klara eller Farhana.
          </p>

          <div className="row">
            <form
              onKeyDown={event => {
                if (event.key == "Enter") event.preventDefault();
              }}
            >
              <label htmlFor="age">Ålder</label>
              <input
                type="number"
                name="age"
                defaultValue={18}
                ref={ref => (this.ageInput = ref)}
              />
              <label htmlFor="gender">Kön</label>
              <select name="gender" ref={ref => (this.genderInput = ref)}>
                <option>Kvinna</option>
                <option>Man</option>
                <option>Annat</option>
                <option>Vill ej uppge</option>
              </select>
            </form>
          </div>

          <div className="row">
            <a className="card" href="#" onClick={this.sendPersonalInformation}>
              <h3>Starta spelet!</h3>
            </a>
          </div>
        </div>

        <style global jsx>
          {`
            document {
              font-family: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif";
            }
          `}
        </style>
        <style jsx>{`
          form label,
          form input {
            display: block;
          }

          form label {
            margin-top: 20px;
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

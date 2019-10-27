import React, { Component } from 'react'


export default class Door extends Component {
  constructor(props) {
    super(props)
  }

  doorClicked = (doorNumber) => {
    if (this.props.doorClicked)
      this.props.doorClicked(doorNumber)

  }

  render = () => {
    let classNames = "door"
    let doorImage = "static/door.png"

    if (this.props.open) {
      classNames += " door-open"
      doorImage = "static/door-open.png"
    } else {
      classNames += " door-closed"
    }


    return (
      <div>
        <a onClick={() => { this.doorClicked(this.props.doorNumber) }}>
          <div className={classNames}>
            <img src={doorImage}></img>
            <span className="plus-button">+</span>
            <span className="counter">{this.props.clicksLeft}</span>
          </div>
        </a>
        <style jsx>{`
          .door {
            position: relative;
          }

          .door img {
            width: 120px;
          }

          .door.door-closed {
            cursor: pointer;
          }

          .door.door-closed:hover img {
            box-shadow: 1px 1px 7px 4px grey;
          }

          .door .plus-button {
            position: absolute;
            left: 43px;
            top: 108px;
            font-size: 40px;
            background-color: blue;
            color: white;
            border-radius: 30px;
            padding: 0px 12px;
          }

          .door.door-closed .plus-button {
            display: none;
          }

          .door .counter {
            position: absolute;
            left: 40px;
            top: 40px;
            font-size: 40px;
            background-color: red;
            color: white;
            border-radius: 30px;
            padding: 0px 12px;
          }

          .door.door-open .counter {
            display: none;
          }


        `}</style>
      </div>
    )

  }

}

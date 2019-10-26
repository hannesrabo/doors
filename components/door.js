import React from 'react'



const Door = function (props) {
  let classNames = "door"
  let doorImage = "static/door.png"
  let doorClicked = () => { }

  if (props.open) {
    classNames += " door-open"
    doorImage = "static/door-open.png"
  } else {
    classNames += " door-closed"
  }

  if (props.doorClicked)
    doorClicked = props.doorClicked

  return (
    <div>
      <a onClick={() => { doorClicked(props.doorNumber) }}>
        <div className={classNames}>
          <img src={doorImage}></img>
          <span className="plus-button">+</span>
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
        `}</style>
    </div>
  )
}

export default Door

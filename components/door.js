import React from 'react'



const Door = function(props) {
  let classNames = "door"
  let doorImage = "static/door.png"
  let doorClicked = () => {}

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
      <a onClick={() => {doorClicked(props.doorNumber)}}>
        <div className={classNames}>
          <img src={doorImage}></img>
        </div>
      </a>
        <style jsx>{`
          .door img {
            width: 120px;
          }

          .door.door-closed {
            cursor: pointer;
          }

          .door.door-closed:hover img {
            box-shadow: 1px 1px 7px 4px grey;
          }
        `}</style>
    </div>
  )
}

export default Door

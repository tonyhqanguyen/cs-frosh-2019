import React from "react";
import "../css/button-group.css";

const Buttons = (props) => {
  const buttons = props.names.map(name => {
    return (
      <button type="button" className="btn" key={name}>{name}</button>
    )
  })
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons}
    </div>
  )
}

export default Buttons;
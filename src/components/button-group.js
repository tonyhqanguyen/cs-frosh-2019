import React from "react";
import { Link } from 'react-router-dom';
import "../css/button-group.css";


const Buttons = (props) => {
  const groupType = props.vertical ? "btn-group-vertical" : "btn-group"; 
  const buttonClassName = props.animate ? `${groupType} animate` : groupType;
  const innerButtonClassName = props.class !== undefined ? ` ${props.class}` : ""
  const buttons = props.names.map((name, i) => {
    return (
      <Link to={props.routes[i]} key={i}>
        <button type="button" className={"btn" + innerButtonClassName} key={i} onClick={props.click}>{name}</button>
      </Link>
    )
  })
  return (
    <div className={buttonClassName + `${props.outerClass !== undefined ? " " + props.outerClass : ""}`} role="group" aria-label="buttons">
      {buttons}
    </div>
  )
}

export default Buttons;
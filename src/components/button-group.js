import React from "react";
import { Link } from 'react-router-dom';
import "../css/button-group.css";


const Buttons = (props) => {
  const buttonClassName = props.animate ? "btn-group animate" : "btn-group";
  console.log(buttonClassName);
  const buttons = props.names.map((name, i) => {
    return (
      <Link to={props.routes[i]} key={i}>
        <button type="button" className="btn" key={i} onClick={props.click}>{name}</button>
      </Link>
    )
  })
  return (
    <div className={buttonClassName} role="group" aria-label="buttons">
      {buttons}
    </div>
  )
}

export default Buttons;
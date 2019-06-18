import React from "react";
import { Link } from 'react-router-dom';
import "../css/button-group.css";

const sayHi = (item1, item2) => {
  console.log(item1, item2);
}


const Buttons = (props) => {
  const buttons = props.names.map((name, i) => {
    return (
      <Link to={props.routes[i]} key={i}>
        <button type="button" className="btn" key={i}>{name}</button>
      </Link>
    )
  })
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons}
    </div>
  )
}

export default Buttons;
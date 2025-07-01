import React from "react";
import "./TripStyle.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="Trip" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}

export default TripData;

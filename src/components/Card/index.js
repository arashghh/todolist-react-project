import React from "react";
import "./Card.scss";

export default function Card(props) {
  console.log(props.title);
  return (
    <div className='card'>
      <h3>{props.title}</h3>
    </div>
  );
}

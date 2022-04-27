import React, { useEffect, useState } from "react";
import "./Card.scss";

export default function Card(props) {
  const [cardBgColor, setCardBgColor] = useState("white");
  const [taskId, setTaskId] = useState(0);
  useEffect(() => setTaskId(props.id), []);

  // const card = document.getElementsByClassName("card");
  // card.setAttribute("id", `${props.day}${taskId}`);

  const [cardId, setCardId] = useState("");
  useEffect(() => setCardId(`${props.day}${taskId}`), []);

  function deleteCard(e) {
    const cardId = e.target.parentElement.parentElement.id;
    const card = document.getElementById(cardId);
    card.remove();
  }

  function child() {
    // setCardBgColor("#ff9494");
    if (cardBgColor === "#ff9494") {
      setCardBgColor("white");
    } else {
      setCardBgColor("#ff9494");
    }
  }

  return (
    <div className='card' id={`${props.day}${taskId}`}>
      <div className='card-box' style={{ backgroundColor: cardBgColor }}>
        <h3>{props.title}</h3>
        <span className='deleteCardBtn' onClick={deleteCard}>
          ×
        </span>
        <span
          className='deleteCardBtn'
          onClick={child}
          title={"make it different!"}
        >
          +
        </span>
      </div>
    </div>
  );
}

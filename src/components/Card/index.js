import React, { useEffect, useState } from "react";
import "./Card.scss";

export default function Card(props) {
  const [titleStyle, setTitleStyle] = useState({});
  const [isDone, setIsDone] = useState(false);
  const [cardBgColor, setCardBgColor] = useState("white");

  const [taskId, setTaskId] = useState(props.id);
  useEffect(() => setTaskId(props.id), []);

  const [cardId, setCardId] = useState("");
  useEffect(() => setCardId(`${props.day}${taskId}`), []);

  function deleteCard(e) {
    const cardId = e.target.parentElement.parentElement.id;
    const card = document.getElementById(cardId);
    card.remove();

    // props.onClickRemoveItem(e.target.parentElement.getAttribute("task-id"));
  }

  function doneTask(e) {
    setIsDone(!isDone);
    if (isDone) {
      setTitleStyle({
        textDecoration: "none",
      });
    } else {
      setTitleStyle({
        textDecoration: "line-through",
      });
      setCardBgColor("#b1b1b1");
    }
  }

  function mmd(e) {
    if (cardBgColor === "white") {
      setCardBgColor("#ff91a5");
    } else if (cardBgColor === "#ff91a5") {
      setCardBgColor("#a6a6f0");
    } else if (cardBgColor === "#a6a6f0") {
      setCardBgColor("#faff99");
    } else if (cardBgColor === "#faff99") {
      setCardBgColor("#a1ffa6");
    } else if (cardBgColor === "#a1ffa6") {
      setCardBgColor("white");
    }
  }

  return (
    <div className='card' id={`${props.day}${taskId}`}>
      <div
        className='card-box'
        style={{ backgroundColor: cardBgColor }}
        task-id={taskId}
        onClick={mmd}
      >
        <h3 style={titleStyle}>{props.title}</h3>
        <span className='deleteCardBtn' onClick={deleteCard}>
          ×
        </span>
        <span
          className='doneCardBtn'
          onClick={doneTask}
          title={"make it Done!"}
        >
          ✓
        </span>
      </div>
    </div>
  );
}

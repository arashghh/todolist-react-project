import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Column.scss";

export default function Column(props) {
  const [tasks, setTasks] = useState([]);
  const [addCardState, setAddCardState] = useState("none");
  const [day, setDay] = useState("");
  const [tasksCounter, setTasksCounter] = useState(0);
  const [newCardTitle, setNewCardTitle] = useState("");

  useEffect(() => setDay(props.day), []);

  function addCard() {
    if (newCardTitle === "") {
      alert("Please enter some title!!!");
    } else {
      setAddCardState("none");
      const newTasksState = tasks.slice();
      newTasksState.push({
        title: newCardTitle,
        id: Math.random() * 100,
        day: day,
      });
      setTasks(newTasksState);
      setTasksCounter(tasksCounter + 1);
      document.getElementById("add-card-input").value = "";
      setNewCardTitle("");
    }
  }

  function showAddCardBox(e) {
    setAddCardState("block");
    // e.target.style.display = "none";
  }

  function closeCard() {
    setAddCardState("none");
    document.getElementById("add-card-input").value = "";
  }

  function submitHandler(e) {
    setNewCardTitle(e.target.value);
  }

  return (
    <div className='column'>
      <div className='col'>
        <h2>{props.day}</h2>
        {tasks.map((item, index) => (
          <Card title={item.title} key={item.id} id={tasksCounter} day={day} />
        ))}

        <input
          id='add-card-input'
          type='text'
          className='add-card-input'
          placeholder='Enter a title for this card...'
          style={{ display: addCardState }}
          onChange={submitHandler}
        />

        <button
          type='submit'
          id='add-card-submit'
          onClick={addCard}
          style={{ display: addCardState }}
        >
          Add Card
        </button>

        <button
          type='button'
          id='close-add-card'
          onClick={closeCard}
          style={{ display: addCardState }}
        >
          Close
        </button>

        <button type='button' className='add-card-btn' onClick={showAddCardBox}>
          + Add a Card
        </button>
      </div>
    </div>
  );
}

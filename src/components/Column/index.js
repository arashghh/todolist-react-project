import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Column.scss";

export default function Column(props) {
  const [tasks, setTasks] = useState([]);
  const [addCardState, setAddCardState] = useState("none");
  const [day, setDay] = useState("");
  const [tasksCounter, setTasksCounter] = useState(0);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => setDay(props.day), []);

  function addCard() {
    if (newCardTitle === "") {
      alert("Please enter some title!!!");
    } else {
      setAddCardState("none");
      const newTasksState = tasks.slice();
      newTasksState.push({
        title: newCardTitle,
        id: taskId,
        day: day,
        isDone: false,
      });
      setTasks(newTasksState);
      setTasksCounter(tasksCounter + 1);
      setInputValue("");
      setNewCardTitle("");
      setTaskId(taskId + 1);
    }
  }

  function showAddCardBox(e) {
    setAddCardState("block");
    // e.target.style.display = "none";
  }

  function closeCard() {
    setAddCardState("none");
    setInputValue("");
  }

  function submitHandler(e) {
    setNewCardTitle(e.target.value);
    setInputValue(e.target.value);
  }

  function onClickIsDone(id) {}

  function onClickRemoveItem(id) {
    // tasks.splice(id - 1, id);
  }

  return (
    <div className='column'>
      <div className='col'>
        <h2>{props.day}</h2>
        {tasks.map((item, index) => (
          <Card
            title={item.title}
            key={item.id}
            id={taskId}
            day={day}
            onClickRemoveItem={onClickRemoveItem}
            onClickIsDone={onClickIsDone}
          />
        ))}

        <textarea
          rows='2'
          cols='50'
          id='add-card-input'
          type='text-area'
          className='add-card-input'
          placeholder='Enter a title for this card...'
          style={{ display: addCardState }}
          onChange={submitHandler}
          value={inputValue}
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

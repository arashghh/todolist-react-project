import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Column.scss";

export default function Column(props) {
  const [tasks, setTasks] = useState([]); // new title task
  const [addCardState, setAddCardState] = useState("none"); // the state that use for show or hide input box //
  const [day, setDay] = useState(""); // the day that column run //
  const [newCardTitle, setNewCardTitle] = useState(""); // the title that user submit in input //
  const [taskId, setTaskId] = useState(0); // task id that we need in card id  //
  const [inputValue, setInputValue] = useState(""); // the value that will be set after user submit task //

  //-------------------------------------------------------//

  // set current day //
  useEffect(() => setDay(props.day), []);

  // run when submit button clicked and add new task title to task state //
  function addCard() {
    if (newCardTitle === "") {
      alert("Please enter some title!!!");
    } else {
      setAddCardState("none");
      const newTasksState = tasks.slice();
      newTasksState.push({
        title: newCardTitle,
        id: Math.floor(Math.random() * 1000),
        day: day,
        isDone: false,
      });
      setTasks(newTasksState);
      setInputValue("");
      setNewCardTitle("");
      setTaskId(taskId + 1);
    }
  }

  function showAddCardBox(e) {
    setAddCardState("block");
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

  function onClickRemoveItem(e) {
    console.log(e.currentTarget.dataset, tasks);
    const result = tasks.filter((item) => {
      console.log(item.id, e.currentTarget.dataset.id);
      return item.id != +e.currentTarget.dataset.id;
    });
    setTasks(result);
  }

  return (
    <div className='column'>
      <div className='col'>
        <h2>{props.day}</h2>
        {tasks.map((item, index) => (
          <Card
            title={item.title}
            key={item.id}
            id={item.id}
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

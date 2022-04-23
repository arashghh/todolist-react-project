import React from "react";
import Card from "../Card";
import "./Column.scss";

export default function Column(item) {
  function addCard() {
    const title = document.getElementById("add-card-input").value;
    document.getElementById("add-card-input").style.display = "none";
    document.getElementById("add-card-submit").style.display = "none";
    document.getElementById("add-card-input").value = "";
    return <Card title={title} />;
  }

  function showAddCardBox() {
    document.getElementById("add-card-input").style.display = "block";
    document.getElementById("add-card-submit").style.display = "block";
  }

  return (
    <div className='column'>
      <div className='col'>
        <h2>{item.day}</h2>
        <Card />
        <input
          id='add-card-input'
          type='text'
          className='add-card-input'
          placeholder='Enter a title for this card...'
        />
        <button type='submit' id='add-card-submit' onClick={addCard}>
          Add Card
        </button>
        <button type='button' className='add-card-btn' onClick={showAddCardBox}>
          + Add a Card
        </button>
      </div>
    </div>
  );
}

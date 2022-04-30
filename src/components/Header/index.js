import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='#' id='weekly-planner'>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span> Weekly Planner</span>
          </Link>
        </li>
        <li>
          <Link to='#'>Days</Link>
        </li>
        <li>
          <Link to='#'>Pages</Link>
        </li>
        <li>
          <Link to='#'>Hashtags</Link>
        </li>
      </ul>

      <input type='text' id='search-box' placeholder='Search...' />
    </div>
  );
}

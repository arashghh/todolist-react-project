import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='#' id='weekly-planner'>
            Weekly Planner
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

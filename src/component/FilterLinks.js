import React from "react";
import "./filterLinks.css";

export default function FilterLinks({ filterLinks, filterHandler }) {
  return (
    <div className="blogs-filter">
      <ul className="filter-items">
        {filterLinks.map((Link, index) => {
          return (
            <li
              id={index}
              className="filter-item"
              onClick={(e) => filterHandler(e.target.innerHTML)}
            >
              {Link}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

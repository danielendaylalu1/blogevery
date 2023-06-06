import React from "react";
import "./navbar.css";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ul className="navbar">
        <h2>Blog~every</h2>
        <li className="navlink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="post">post blog</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="about">about</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="help">help</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

import React, { useState, useReducer, useContext } from "react";
import { useStateValue } from "../../StateProvider";
import "./NavBar.css";

function NavBar() {
  const [state, dispatch] = useStateValue();

  return (
    <>
      <div className="nav">
        <div className="img-cont">
          <h2>TESLA</h2>
        </div>
        <div className="nav-middle-list">
          <ul>
            <li>MODEL S</li>
            <li>MODEL 3</li>
            <li>MODEL X</li>
            <li>MODEL Y</li>
          </ul>
        </div>
        <div className="nav-right-list">
          <ul>
            <li>SHOP</li>
            <li>TESLA ACCOUNT</li>
            <div
              className="custom-toggler"
              onClick={() => dispatch({ type: "TOGGLE_BAR" })}
            >
              <div className="custom-line"></div>
              <div className="custom-line"></div>
              <div className="custom-line"></div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;

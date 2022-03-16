import React from "react";
import { useStateValue } from "../../StateProvider";
import { list } from "../../list";
import "./SideBar.css";

function SideBar() {
  // const [state, dispatch] = useStateValue()
  const [{ isSideBarOpen }, dispatch] = useStateValue();
  return (
    <div
      className="side-bar"
      style={{ display: !isSideBarOpen ? "none" : "block" }}
    >
      <ul>
        <p onClick={() => dispatch({ type: "TOGGLE_BAR" })}>close</p>
        {list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li>{item}</li>
              <hr />
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;

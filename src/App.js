import React from "react";
import "./App.css";
import HeroList from "./components/HeroList/HeroList";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <HeroList />
    </div>
  );
}

export default App;

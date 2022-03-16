import React from "react";
import "./Hero.css";
function Hero({ title, description, image, isDiff }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="hero">
      <div className="part-one">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="part-two">
        <button className="btn-1">
          {isDiff ? "order now" : "custom order"}
        </button>
        <button className="btn-2">
          {" "}
          {isDiff ? "learn more" : "existing inventory"}
        </button>
      </div>
      {/* <div>
        <img src="/assets/down-arrow.svg.png" alt="" />
      </div> */}
    </div>
  );
}

export default Hero;

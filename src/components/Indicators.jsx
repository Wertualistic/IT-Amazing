import React from "react";
import "./Styles/Indicators.css";
import img from "../Assets/Mask group.svg";
import img1 from '../Assets/Vector.svg';

function Indicators() {
  return (
    <div className="indicators container d-flex flex-column justify-content-center align-items-center">
      <h1 className="pt-5">Ko'rsatkichlar</h1>
      <div className="cards pt-5 gap-5 d-flex justify-content-center align-items-center">
        <div className="card-item d-flex flex-column justify-content-center align-items-center">
          <h1>200+</h1>
          <p>Loyihalar</p>
        </div>
        <span>|</span>
        <div className="card-item d-flex flex-column justify-content-center align-items-center">
          <h1>110+</h1>
          <p>Muvafaqiyatli loyihalar</p>
        </div>
        <span>|</span>
        <div className="card-item d-flex flex-column justify-content-center align-items-center">
          <h1>50+</h1>
          <p>Mamnun mijozlar</p>
        </div>
        <span>|</span>
        <div className="card-item d-flex flex-column justify-content-center align-items-center">
          <h1>5+</h1>
          <p>Xizmat turlari</p>
        </div>
      </div>
      <div className="content d-flex justify-content-between container">
          <div className="main">
            <img src={img} alt="" className="img"/>
            <div className="circle"></div>
            <img src={img1} alt="" className="vector"/>
          </div>
          <div className="right-side">
            <h1>Hello</h1>
          </div>
      </div>
    </div>
  );
}

export default Indicators;

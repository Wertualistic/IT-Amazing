import React from "react";
import "./Styles/Indicators.css";
import img from "../Assets/Mask group.svg";
import img1 from "../Assets/Vector.svg";
import img2 from "../Assets/Vector1.svg";
import { Link } from "react-router-dom";

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
      <div className="content d-flex justify-content-center container">
        <div className="main col-md-6 d-flex">
          <div className="imgs">
            <img src={img} alt="" className="img" />
            <div className="circle"></div>
            <img src={img1} alt="" className="vector" />
            <img src={img2} alt="" className="vector1" />
          </div>
        </div>
        <div className="right-side col-md-6 d-flex flex-column justify-content-start align-items-stretch">
          <h5 className="aboutt">
            <div className="circ"></div>Biz nima qilamiz
            <div className="circ"></div>
          </h5>
          <h1 className="mt-5 h1">Lorem ipsum dolor sit <br /> amet consectetur. <br /> Orci metus dignissim</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Orci metus metus dignissim
            porttitor eleifend aliquam mattis sagittis.
          </p>
          <div>
          <Link to='/about' className="btn btn-primary mt-5 button">Biz haqimizda</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indicators;

import React from "react";
import { Link } from "react-router-dom";
import './Styles/Header.css';
import img from '../Assets/Group 246.svg'
import img2 from '../Assets/freepik--speech-bubble-2--inject-8.svg'
import img3 from '../Assets/freepik--character-1--inject-8.svg'
import img4 from '../Assets/freepik--character-2--inject-8.svg'
import img5 from '../Assets/freepik--Stars--inject-8.svg'
import img6 from '../Assets/freepik--background-complete--inject-8.svg'

function Header() {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left-side col-md-6 d-flex flex-column">
          <h1 className="white">
            Biznesingiz uchun Web Site, Sotuvchi Site va Telegram Bot
            tayyorlaymiz
          </h1>
          <h5 className="pt-3">
          Web Site - Lorem ipsum dolor sit amet consectetur. Integer et arcu adipiscing sapien facilisi varius aliquet lacus. 
          </h5>
          <div className="btns d-flex gap-5 pt-5 mt-5">
            <Link to='/portfolio' className="btn btn-warning text-white">
                Portfolio    <i class="ri-arrow-right-line"></i>
            </Link>
            <Link to='/works' className="btn text-white" style={{background: '#002C65'}}>
                Xizmat turlarii    <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
        <div className="right-side mt-5">
            <img src={img} alt="" className="img img1"/>
            <img src={img2} alt="" className="img img2"/>
            <img src={img3} alt="" className="img img3"/>
            <img src={img4} alt="" className="img img4"/>
            <img src={img5} alt="" className="img img5"/>
            <img src={img6} alt="" className="img img6"/>
        </div>
      </div>
    </div>
  );
}

export default Header;

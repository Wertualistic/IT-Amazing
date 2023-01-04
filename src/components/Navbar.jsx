import React from "react";
import logo from "../Assets/20221224_174819 1.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="container navbar bg-0">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" width="90" />
        </Link>
        <div className="nav-menu d-flex gap-5">
          <li className="list-group">
            <Link to="/home" className="link-primary text-decoration-none">Bosh sahifa</Link>
          </li>
          <li className="list-group">
            <Link to="/about" className="link-primary text-decoration-none">Biz haqimizda</Link>
          </li>
          <li className="list-group">
            <Link to="/portfolio" className="link-primary text-decoration-none">Portfolio</Link>
          </li>
          <li className="list-group">
            <Link to="/works" className="link-primary text-decoration-none">Xizmatlar</Link>
          </li>
        </div>
        <div className="content d-flex gap-3 align-items-center">
          <div className="phone link-primary d-flex">
            <i className="ri-phone-line"></i>
            +998 (90) 256-96-62
          </div>
          <div className="dropdown bg-0">
            <select className="link-primary form-select border-0 bg-0">
              <option>Uz</option>
              <option>Ru</option>
              <option>En</option>
            </select>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;

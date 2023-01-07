import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Assets/pexels-tranmautritam-326503 1.svg'
import web from '../Assets/Group 221.svg'
import android from '../Assets/Group 220.svg'
import bot from '../Assets/Group 219.svg'
import './Styles/Products.css'

function Products() {
  return (
    <div className='Product container'>
      <center>
        <h1>Xizmatlar</h1>
      </center>
      <div className="works d-flex align-items-start justify-content-between gap-5">
      <div className="left col-md-6">
        <h3>Biz sizga yordam bera oladigan xizmat turlari.</h3>
        <img src={img} alt="" />
        <p>Biz kafolatlaymiz! Siz uchun eng sifatli xizmat <br />
          ko’rsatishga.</p>
          <Link to='/works' className="btn text-white btn2">
                Barcha xizmatlarni ko'rish 
          </Link>
      </div>
      <div className="right d-flex align-items-start gap-3 col-md-6">
        <div className="cards d-flex flex-column gap-3 align-items-start">
          <div className="card">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Web <br />
                development</h2>
              <img src={web} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
          <div className="card card2">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Mobile App <br />
                development</h2>
              <img src={android} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
          <div className="card card2">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Telegram <br />
                bot</h2>
              <img src={bot} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
          <div className="card">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Web <br />
                development</h2>
              <img src={web} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
          <div className="card card2">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Mobile App <br />
                development</h2>
              <img src={android} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
          <div className="card card2">
            <div className="web d-flex align-items-center justify-content-between">
              <h2>Telegram <br />
                bot</h2>
              <img src={bot} alt="" />  
            </div>
            <div className="more d-flex align-items-center gap-1">
              <div className="arrow">
                <i class="ri-arrow-right-line"> </i>
              </div>
              Batafsil
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>      
  )
}

export default Products

import React from "react";
import "./Quciky.css";
import Img from "../../assets/Quciky.jpg";
import { FaCircle } from "react-icons/fa6";
import { TbPlus } from "react-icons/tb";

function Quciky() {
  return (
    <div className="quciky">
      <div className="q_container">
        <div className="q_project">
          <div className="image">
            <img src={Img} alt="project image here" />
          </div>
          <h2 className="name">Quciky</h2>
          <p>Designing a financial management for secure transaction</p>
          <div className="tags">
            <span>Web Design</span>
            <FaCircle className="icon" size={7} />
            <span>Enterprise</span>
            <FaCircle className="icon" size={7} />
            <span>Development</span>
            <FaCircle className="icon" size={7} />
            <span>Development</span>
          </div>
        </div>

        <div className="down">
          <button className="q_btn">
            <a href="#">View all case studies</a>
            <TbPlus className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quciky;

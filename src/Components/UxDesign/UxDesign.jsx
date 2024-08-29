import React from "react";
import "./UxDesign.css";
import { FiArrowUpRight } from "react-icons/fi";

function UxDesign() {
  return (
    <div className="uxDesign">
      <div className="design_content">
        <div className="left">
          <h2>UI/UX Design</h2>
          <p>
            Our UI/UX design services ensure your users have a seamless,
            engaging, and memorable experience.
          </p>
          <button className="ux_btn">
            <a href="#">Start a Project</a>
            <FiArrowUpRight className="icon" />
          </button>
        </div>

        <div className="right">
          <div className="text">
            <h4 className="tit">UI UX SERVICES</h4>
          </div>
          <div className="text">
            <span>01</span>
            <p>User Research</p>
          </div>
          <div className="text">
            <span>02</span>
            <p>Wireframe & Prototyping</p>
          </div>
          <div className="text">
            <span>03</span>
            <p>Data-Driven Design</p>
          </div>
          <div className="text">
            <span>04</span>
            <p>Mobile First & Responsive Design</p>
          </div>
          <div className="text">
            <span>05</span>
            <p>Design system</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxDesign;

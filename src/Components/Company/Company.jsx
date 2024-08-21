import React from "react";
import "./Company.css";
import company1 from "../../assets/company1.jpg";
import company2 from "../../assets/company2.jpg";
import { FaCircle } from "react-icons/fa6";

function Company() {
  return (
    <div className="company">
      <div className="company_container">
        <h2 className="title">The work we did, companies we've helped grow.</h2>
        <div className="company_content">
          <div className="project1">
            <div className="image">
              <img src={company1} alt="project image here" />
            </div>
            <h2 className="name">Kodezi</h2>
            <p>
              Designing and building interactive AI experiences for developer
            </p>
            <div className="tags">
              <span>Web Design</span>
              <FaCircle className="icon" size={7} />
              <span>Enterprise</span>
              <FaCircle className="icon" size={7} />
              <span>Development</span>
            </div>
          </div>

          <div className="project2">
            <div className="image">
              <img src={company2} alt="project image here" />
            </div>
            <h2 className="name">Solon Network</h2>
            <p>Creating experiences for crypto automated protocol</p>
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
        </div>
      </div>
    </div>
  );
}

export default Company;

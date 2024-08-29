import React, { useRef } from "react";
import "./Quciky.css";
import { FaCircle } from "react-icons/fa6";
import { TbPlus } from "react-icons/tb";

import video from "../../assets/Videos/Quciky.mp4";

function Quciky() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="quciky">
      <div className="q_container">
        <div className="q_project">
          <div className="video">
            <video
              ref={videoRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              muted
              controls={false}
              src={video}
            />
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

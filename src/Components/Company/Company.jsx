import React, { useRef } from "react";
import "./Company.css";
import { FaCircle } from "react-icons/fa6";

import video1 from "../../assets/Videos/Company1.mp4";
import video2 from "../../assets/Videos/Company2.mp4";

function Company() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

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

  //

  const handleMouseEnter2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play();
    }
  };

  const handleMouseLeave2 = () => {
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  };

  return (
    <div className="company">
      <div className="company_container">
        <h2 className="title">The work we did, companies we've helped grow.</h2>
        <div className="company_content">
          <div className="project1">
            <div className="video">
              <video
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                muted
                controls={false}
                src={video1}
              />
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
            <div className="video">
              <video
                ref={videoRef2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                muted
                controls={false}
                src={video2}
              />
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

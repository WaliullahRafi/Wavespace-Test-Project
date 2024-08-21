import React from "react";
import "./Support.css";
import Image from "../../assets/Support.png";
import { FiArrowUpRight } from "react-icons/fi";

function Support() {
  return (
    <div className="support">
      <div className="s_container">
        <div className="s_left">
          <h2>Minimize your project risk and support costs with wavespace!</h2>
          <div className="left_down">
            <p>
              By conducting thorough user research, creating detailed
              prototypes, and performing strict usability testing, we identify
              and address potential issues early in the design process. This
              proactive approach ensures that your project stays on track and
              within budget.
            </p>
            <button className="support_btn">
              <a href="#">Start a Project</a>
              <FiArrowUpRight className="icon" size={24} />
            </button>
          </div>
        </div>

        <div className="s_right">
          <img src={Image} alt="project image here" />
        </div>
      </div>
    </div>
  );
}

export default Support;

import React from "react";
import "./Calender.css";
import CalCom from "./CalCom";

function Calender() {
  return (
    <div className="calender">
      <div className="cal_container">
        <h2 className="title">Do you building awesome product ? Book a free strategy call.</h2>
        <div className="cal_content">
          <CalCom />
        </div>
      </div>
    </div>
  );
}

export default Calender;

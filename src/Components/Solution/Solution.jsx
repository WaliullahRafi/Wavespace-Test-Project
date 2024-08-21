import React from "react";
import "./Solution.css";
import SolutionImg from "../../assets/Solution.jpg";

function Solution() {
  return (
    <div className="solution">
      <div className="solution_container">
        <h2>Custom UI UX solution for any industry</h2>
        <p>
          At Wavespace, we specialize in crafting bespoke UI UX solutions
          tailored to meet the unique needs of any industry. Whether it is
          enterprise, fitness and sports, logistics platforms, cryptocurrency,
          food tech, med tech, real estate, or any other industry - You name it!
          Wavespace design team will get you covered.
        </p>
        <div className="image">
          <img src={SolutionImg} alt="project image here" />
        </div>
      </div>
    </div>
  );
}

export default Solution;

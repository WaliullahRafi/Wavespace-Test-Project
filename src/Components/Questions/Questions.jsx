import React, { useState } from "react";
import "./Questions.css";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { GoArrowDownLeft } from "react-icons/go";

function Questions() {
  const data = [
    {
      question: "How important is the UI/UX design for a Product?",
      answer:
        "UI/UX design is crucial for a product's success as it directly impacts user satisfaction and engagement. A well-designed interface makes the product intuitive and easy to use, enhancing the overall user experience. This leads to higher user retention, increased customer loyalty, and, ultimately, better business outcomes.",
    },
    {
      question: "What is the difference between UI and UX?",
      answer:
        "UI (User Interface) design focuses on a product's visual elements, such as layout, colors, and typography, to ensure it is aesthetically pleasing and interactive. On the other hand, UX (User Experience) design involves the overall feel of the user journey, emphasizing usability, accessibility, and efficiency. While UI is about the product's look and feel, UX is about the user's overall interaction with the product.",
    },
    {
      question: "How do you stay up to date with emerging design trends?",
      answer:
        "We stay at the forefront of emerging design trends through continuous learning and industry engagement. Our team regularly attends design conferences, participates in professional workshops, and follows leading design publications. Additionally, we actively seek feedback from our projects and clients, allowing us to adapt and innovate continually.",
    },
    {
      question: "What makes your UI/UX agency different from others?",
      answer:
        "At wavespace prive, we distinguish ourselves through our holistic approach to UI/UX design. We combine deep user research, innovative design thinking, and data-driven strategies to create unique and effective solutions. Our team is dedicated to understanding your specific needs and delivering designs that not only meet but exceed expectations, ensuring your brand stands out in a competitive market.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="question">
      <div className="question_content">
        <h2 className="head">
          Frequently asked <br />
          Questions
        </h2>
        <div className="ques_container">
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? (
                    <GoArrowDownLeft className="icon" />
                  ) : (
                    <HiMiniArrowUpRight className="icon" />
                  )}
                </span>
              </div>

              <div className={selected === i ? "content show" : "content"}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;

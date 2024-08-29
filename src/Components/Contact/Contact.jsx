import React from "react";
import "./Contact.css";
import profile from "../../assets/profile.png";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact">
      <div className="c_container">
        <div className="c_left">
          <h2>Let's start a project together</h2>
          <p>
            “We like their work method, design skill, and the way they
            communicate”. We like their work method, design skill, and the way.
          </p>
          <div className="profile">
            <div className="image">
              <img src={profile} alt="profile image her" />
            </div>
            <div className="details">
              <h4>Nikita Ribakovs</h4>
              <span>Founder & CEO @tournated</span>
            </div>
          </div>
          <h3>
            Let's start a project <br />
            together
          </h3>
          <h4 className="hidden_book_title">
            Book a free schedule strategy call.
          </h4>
          <button className="schedule_btn">
            <a href="#">Schedule 15 minutes call</a>
            <FiArrowUpRight className="icon" />
          </button>
        </div>

        <div className="c_right">
          <h2 className="hidden_text">Let's start a project together</h2>
          <div className="name">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Name" />
          </div>
          <select className="dropdown" name="SelectService" id="">
            <option value="Select service">Select service</option>
            <option value="UI UX Design">UI UX Design</option>
            <option value="UI UX Design">Web Design</option>
            <option value="Brand Identity">Brand Identity</option>
          </select>
          <select className="dropdown" name="BudgetRange" id="">
            <option value="Budget range">Budget range</option>
            <option value="$5000 - 10,000 USD">$5000 - 10,000 USD</option>
            <option value="$10,000 - 20,000 USD">$10,000 - 20,000 USD</option>
            <option value="$20,000 - 50,000 USD">$20,000 - 50,000 USD</option>
          </select>
          <textarea
            className="message"
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            rows="20"
          ></textarea>
          <div className="btn-area">
            <div className="details">
              <span>Hate contact forms?</span>
              <p>hello@wavespace.agency</p>
            </div>
            <button className="hate_contact_btn">
              <a href="#">Start a Project</a>
              <FiArrowUpRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

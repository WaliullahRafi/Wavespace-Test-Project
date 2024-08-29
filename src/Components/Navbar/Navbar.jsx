import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

// import LottieLogo from "../../../public/wavespaceLogo.json";
// import Lottie from "lottie-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo here" />
          {/* <Lottie loop={false} animationData={LottieLogo} className="lottie" /> */}
        </div>

        <div className="nav_links">
          {["Case studies", "Pricing", "Services", "About us"].map(
            (item, index) => (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            )
          )}

          <button className="nav_btn">
            <a href="#">Start a Project</a>
            <FiArrowUpRight className="icon" size={24} />
          </button>
        </div>

        <div
          className="nav_menu_icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <IoMenuOutline />}
          {isMenuOpen && (
            <div className="mobile_list">
              {["Case studies", "Pricing", "Service", "Blog", "About Us"].map(
                (item, index) => (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              )}
              <button className="mobile_nav_btn">
                <a href="#">Start a Project</a>

                <FiArrowUpRight className="icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

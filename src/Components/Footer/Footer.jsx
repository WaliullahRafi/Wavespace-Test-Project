import React from "react";
import "./Footer.css";
import btnIcon from "../../assets/btnIcon.png";
import footerImage from "../../assets/FooterImage.png";

function Footer() {
  return (
    <div id="footer">
      <div id="footer_main">
        <div className="footer_container">
          <div className="footer_content">
            <div className="footer_left">
              {["Work", "Service", "Pricing", "About us", "Contact"].map(
                (item, index) => (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              )}
            </div>

            <div className="footer_right">
              <span>hello@wavespace.agency</span>
              <p>+44 (0)20 8883 3953</p>
              <p>
                Jl Ciganitri Regensi No. 31, RT.5/RW.7, Bojongsoang, Bandung,
                Jawa Barat, Indonesia{" "}
              </p>
            </div>

            <div className="hidden_links">
              {["Behance", "Dribbble", "Linkedin", "Instagram", "Twitter"].map(
                (item, index) => (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              )}
            </div>
          </div>

          <div className="footer_middle">
            <div className="middle_links">
              {["Behance", "Dribbble", "Linkedin", "Instagram", "Twitter"].map(
                (item, index) => (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              )}
            </div>

            <div className="middle_btn">
              <div className="text">
                <span>Let's work together</span>
                <p>Call wavespace</p>
              </div>
              <div className="circle">
                <img src={btnIcon} alt="btn icon here" />
              </div>
            </div>

            <div className="hidden_details">
              <div className="details">
                <span>hello@wavespace.agency</span>
                <p>+44 (0)20 8883 3953</p>
                <p>
                  Jl Ciganitri Regensi No. 31, RT.5/RW.7, Bojongsoang, Bandung,
                  Jawa Barat, Indonesia{" "}
                </p>
              </div>
              <div className="circle_btn">
                <img src={btnIcon} alt="btn icon here" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer_logo">
          <img src={footerImage} alt="footer logo image here" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Home.css";
import homeImg from "../../assets/Home.jpg";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="title">
          <h1>User experience design agency</h1>
          <p>
            We are a globally recognized UI UX design services company. Our UI
            UX solutions enable your brand to make a strong and good first
            impression on customers.
          </p>
        </div>

        <div className="home_img">
          <img src={homeImg} alt="home img/video here" />
        </div>

        <div className="title2">
          <h2>
            Let's design an enjoyable and engaging experience for your customers
          </h2>
          <p>
            From buttons that invite clicks to layouts that guide users
            effortlessly, our UI/UX design services focus on the details that
            make a difference. We design interfaces that are intuitive and
            visually appealing, ensuring every element, from navigation menus to
            call-to-action buttons, is crafted to enhance user interaction and
            build trust.
          </p>
          <p className="p2">
            Our approach centers on creating a seamless, engaging experience
            connecting your brand and audience. Whether it's a website, an app,
            or a digital product, we prioritize user needs and <br />
            preferences, making every interaction simple and enjoyable.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

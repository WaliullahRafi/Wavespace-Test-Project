import React from "react";
import "./DesignService.css";
import { FiArrowUpRight } from "react-icons/fi";
import Service1 from "../../assets/Service1.jpg";
import Service2 from "../../assets/Service2.png";
import Service3 from "../../assets/Service3.png";
import Service4 from "../../assets/Service4.png";
import Service5 from "../../assets/Service5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function DesignService() {
  return (
    <div className="service">
      <div className="service_container">
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="service_content">
              <div className="service_left">
                <h3>Our UI UX design services</h3>
                <div className="left_down">
                  <p>
                    Our UI/UX design services are tailored to meet your <br />
                    business's and users' specific needs. We turn complex <br />
                    problems into simple, elegant solutions.
                  </p>
                  <button className="service_btn">
                    <a href="#">Start a Project</a>
                    <FiArrowUpRight className="icon" />
                  </button>
                </div>
              </div>

              <div className="service_right">
                <div className="right_down">
                  <span className="number">01</span>
                  <div>
                    <span className="title">User Research</span>
                    <p>
                      We conduct comprehensive studies and analyses to
                      understand your target audience. By gathering valuable
                      insights, we ensure that your product meets users' real
                      needs.
                    </p>
                    <div className="image">
                      <img src={Service1} alt="service image here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service_content">
              <div className="service_left">
                <h3>Our UI UX design services</h3>
                <div className="left_down">
                  <p>
                    Our UI/UX design services are tailored to meet your <br />
                    business's and users' specific needs. We turn complex <br />
                    problems into simple, elegant solutions.
                  </p>
                  <button className="service_btn">
                    <a href="#">Start a Project</a>
                    <FiArrowUpRight className="icon" />
                  </button>
                </div>
              </div>

              <div className="service_right">
                <div className="right_down">
                  <span className="number">02</span>
                  <div>
                    <span className="title">Wireframe & Prototyping</span>
                    <p>
                      Bring your ideas to life through detailed blueprints and
                      interactive prototypes. This allows you to visualize the
                      structure and functionality of your product.
                    </p>
                    <div className="image">
                      <img src={Service2} alt="service image here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service_content">
              <div className="service_left">
                <h3>Our UI UX design services</h3>
                <div className="left_down">
                  <p>
                    Our UI/UX design services are tailored to meet your <br />
                    business's and users' specific needs. We turn complex <br />
                    problems into simple, elegant solutions.
                  </p>
                  <button className="service_btn">
                    <a href="#">Start a Project</a>
                    <FiArrowUpRight className="icon" />
                  </button>
                </div>
              </div>

              <div className="service_right">
                <div className="right_down">
                  <span className="number">03</span>
                  <div>
                    <span className="title">Data-Driven Design</span>
                    <p>
                      Our Data-Driven Design approach leverages analytics and
                      user feedback to create UX/UI design solutions. By
                      utilizing real data, we ensure that our designs
                      effectively meet the market demands.
                    </p>
                    <div className="image">
                      <img src={Service3} alt="service image here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service_content">
              <div className="service_left">
                <h3>Our UI UX design services</h3>
                <div className="left_down">
                  <p>
                    Our UI/UX design services are tailored to meet your <br />
                    business's and users' specific needs. We turn complex <br />
                    problems into simple, elegant solutions.
                  </p>
                  <button className="service_btn">
                    <a href="#">Start a Project</a>
                    <FiArrowUpRight className="icon" />
                  </button>
                </div>
              </div>

              <div className="service_right">
                <div className="right_down">
                  <span className="number">04</span>
                  <div>
                    <span className="title">
                      Mobile Fast & Responsive Design
                    </span>
                    <p>
                      In every project, we prioritize mobile usability to ensure
                      seamless adaptability and provide an optimal user
                      experience. Our fast and responsive designs make your
                      product look and work flawlessly.
                    </p>
                    <div className="image">
                      <img src={Service4} alt="service image here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service_content">
              <div className="service_left">
                <h3>Our UI UX design services</h3>
                <div className="left_down">
                  <p>
                    Our UI/UX design services are tailored to meet your <br />
                    business's and users' specific needs. We turn complex <br />
                    problems into simple, elegant solutions.
                  </p>
                  <button className="service_btn">
                    <a href="#">Start a Project</a>
                    <FiArrowUpRight className="icon" />
                  </button>
                </div>
              </div>

              <div className="service_right">
                <div className="right_down">
                  <span className="number">05</span>
                  <div>
                    <span className="title">Design System</span>
                    <p>
                      Our design system establishes a cohesive and consistent
                      visual language for your brand. With this design system,
                      your product enables efficient collaboration and maintains
                      a suitable look and feel.
                    </p>
                    <div className="image">
                      <img src={Service5} alt="service image here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="service_content">
          <div className="service_left">
            <h3>Our UI UX design services</h3>
            <div className="left_down">
              <p>
                Our UI/UX design services are tailored to meet your <br />
                business's and users' specific needs. We turn complex <br />
                problems into simple, elegant solutions.
              </p>
              <button className="service_btn">
                <a href="#">Start a Project</a>
                <FiArrowUpRight className="icon" size={24} />
              </button>
            </div>
          </div>

          <div className="service_right">
            <div className="right_down">
              <span className="number">01</span>
              <div>
                <span className="title">User Research</span>
                <p>
                  We conduct comprehensive studies and analyses to understand
                  your target audience. By gathering valuable insights, we
                  ensure that your product meets users' real needs.
                </p>
                <div className="image">
                  <img src={Service1} alt="service image here" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default DesignService;

import React from "react";
import "./DesignService.css";
import { FiArrowUpRight } from "react-icons/fi";
import Service1 from "../../assets/Service1.jpg";

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

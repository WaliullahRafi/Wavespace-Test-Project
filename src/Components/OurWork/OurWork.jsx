import React, { useEffect, useState } from "react";
import "./OurWork.css";
import { LiaStarSolid } from "react-icons/lia";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function OurWork() {
  const [cards, setCards] = useState(window.innerWidth < 760 ? 1.2 : 4);

  const handleCards = () => {
    if (window.innerWidth < 760) {
      setCards(1);
    } else {
      setCards(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCards);

    return () => {
      window.removeEventListener("resize", handleCards);
    };
  }, []);

  return (
    <div className="work">
      <div className="work_container">
        <h2 className="title">
          We are wavesapce Impact <br />
          of our work
        </h2>
        <div className="work_content">
          <Swiper
            slidesPerView={window.innerWidth < 760 ? 1.2 : 4.2}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="box1">
                <div className="top">
                  <h2>4.9</h2>
                  <div className="stars">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <span>200+ reviews</span>
                </div>

                <div className="image">
                  <img src={logo1} alt="sponsors logo here" />
                  <img src={logo2} alt="sponsors logo here" />
                  <img src={logo3} alt="sponsors logo here" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>200+</h2>
                <div className="details">
                  <p>Happy clients</p>
                  <span>We work</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>10+</h2>
                <div className="details">
                  <p>Award of wavespace</p>
                  <span>Achievement our</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>$600 M+</h2>
                <div className="details">
                  <p>Companies funding</p>
                  <span>Brand growing</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>200+</h2>
                <div className="details">
                  <p>Happy clients</p>
                  <span>We work</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>10+</h2>
                <div className="details">
                  <p>Award of wavespace</p>
                  <span>Achievement our</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>$600 M+</h2>
                <div className="details">
                  <p>Companies funding</p>
                  <span>Brand growing</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>200+</h2>
                <div className="details">
                  <p>Happy clients</p>
                  <span>We work</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="box">
                <h2>10+</h2>
                <div className="details">
                  <p>Award of wavespace</p>
                  <span>Achievement our</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="box1">
            <div className="top">
              <h2>4.9</h2>
              <div className="stars">
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
              </div>
              <span>200+ reviews</span>
            </div>

            <div className="image">
              <img src={logo1} alt="sponsors logo here" />
              <img src={logo2} alt="sponsors logo here" />
              <img src={logo3} alt="sponsors logo here" />
            </div>
          </div> */}

          {/* <div className="box">
            <h2>200+</h2>
            <div className="details">
              <p>Happy clients</p>
              <span>We work</span>
            </div>
          </div> */}

          {/* <div className="box">
            <h2>200+</h2>
            <div className="details">
              <p>Happy clients</p>
              <span>We work</span>
            </div>
          </div> */}

          {/* <div className="box">
            <h2>10+</h2>
            <div className="details">
              <p>Award of wavespace</p>
              <span>Achievement our</span>
            </div>
          </div> */}

          {/* <div className="box">
            <h2>$600 M+</h2>
            <div className="details">
              <p>Companies funding</p>
              <span>Brand growing</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OurWork;

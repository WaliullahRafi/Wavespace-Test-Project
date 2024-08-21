import React, { useEffect, useState } from "react";
import "./Partner.css";
import { LiaStarSolid } from "react-icons/lia";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function Partner() {
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
    <div className="partner">
      <div className="partner_container">
        <h2 className="title">
          A reliable partner for wide world-class quality
        </h2>
        <div className="partner_content">
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
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <span>Kodezi</span>
                <h2>
                  We like their work method, design skill, and the way they
                  communicate”{" "}
                </h2>
                <div className="details">
                  <p>Israqh Khan</p>
                  <span>CEO</span>
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
            <span>Kodezi</span>
            <h2>
              We like their work method, design skill, and the way they
              communicate”{" "}
            </h2>
            <div className="details">
              <p>Israqh Khan</p>
              <span>CEO</span>
            </div>
          </div> */}

          {/* <div className="box">
            <span>Kodezi</span>
            <h2>
              We like their work method, design skill, and the way they
              communicate”{" "}
            </h2>
            <div className="details">
              <p>Israqh Khan</p>
              <span>CEO</span>
            </div>
          </div> */}

          {/* <div className="box">
            <span>Kodezi</span>
            <h2>
              We like their work method, design skill, and the way they
              communicate”{" "}
            </h2>
            <div className="details">
              <p>Israqh Khan</p>
              <span>CEO</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Partner;

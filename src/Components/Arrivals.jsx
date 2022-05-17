import React from "react";
import "./Arrivals.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Books } from "./DataFile";

function Arrivals() {
  return (
    <section className="arrivals" id="arrivals">
      <h1 className="heading">
        <span>new arrivals</span>
      </h1>

      <div className="arrivals-slider" style={{padding:'5rem 0 0'}}>
        <div className="wrapper">
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 9500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[]}
            className="mySwiper"
          >
            {Books.slice(6, 10).map((data, key) => {
              return (
                <div key={key}>
                  <SwiperSlide>
                    <a href="#" className="box">
                      <div className="image">
                        <img src={data.url} alt="" />
                      </div>
                      <div className="content">
                        <h3>{data.title}</h3>
                        <div className="price">
                          ${data.dis_price} <span>{data.price}</span>
                        </div>
                        <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="arrivals-slider" style={{padding:'5rem 0 0'}}>
        <div className="wrapper">
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 9500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[]}
            className="mySwiper"
          >
            {Books.slice(0, 5).map((data, key) => {
              return (
                <div key={key}>
                  <SwiperSlide>
                    <a href="#" className="box">
                      <div className="image">
                        <img src={data.url} alt="" />
                      </div>
                      <div className="content">
                        <h3>{data.title}</h3>
                        <div className="price">
                          {data.dis_price} <span>{data.price}</span>
                        </div>
                        <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;

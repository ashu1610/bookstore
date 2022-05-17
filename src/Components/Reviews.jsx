import React from "react";
import "./Reviews.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Clients } from "./DataFile";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h1 class="heading">
        <span>client's reviews</span>
      </h1>
      <div className="reviews-slider" style={{padding:'5rem 0 0'}}>
        <Swiper
          spaceBetween={10}
          grabCursor={true}
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
          {Clients.map((data, key) => {
            return (
              <div key={key}>
                <SwiperSlide>
                  <div className="box">
                    <img src={data.url} alt="" />
                    <h3>{data.name}</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                      similique facere hic.
                    </p>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;

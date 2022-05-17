import React from "react";
import "./Blogs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { BlogList } from "./DataFile";

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        <span>our blogs</span>{" "}
      </h1>

      <div className="blogs-slider" style={{padding:'5rem 0 0'}}>
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
          {BlogList.map((data, key) => {
            return (
              <div key={key}>
                <SwiperSlide>
                  <div className="box">
                    <div className="image">
                      <img src={data.url} alt="" />
                    </div>
                    <div className="content">
                      <h3>{data.heading}</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio, odio.
                      </p>
                      <a href="#" className="btn">
                        read more
                      </a>
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

export default Blogs;

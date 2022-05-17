import React from "react";
import "./Home.css";
import {Books} from './DataFile';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Home() {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>upto 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            deserunt nostrum accusomus. Nam alias sit necessitatubus, aliquid ex
            minima at!
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
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
          modules={[Pagination]}
          className="mySwiper book-slider"
        >
          
          {Books.slice(0,5).map((data, key)=>{
            return (
              <div key={key}>
                <SwiperSlide><a><img src={data.url}></img></a></SwiperSlide>
              </div>
            )
          })}
          <img src="image/stand.png" className="stand"></img>
        </Swiper>
      </div>
    </section>
  );
}

export default Home;

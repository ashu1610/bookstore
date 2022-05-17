import React, { useState } from "react";
import "./Featured.css";
import { Books } from "./DataFile";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

function Featured({
  cartList,
  setCartList,
  listItem,
  setListItem,
  sum,
  setSum,
  cartCount,
  setCartCount,
}) {
  const updateCart = (data) => {
    setCartList([
      ...cartList,
      { id: data.id, title: data.title, price: data.dis_price, url: data.url },
    ]);
    setSum(sum + data.dis_price);
    setCartCount(cartCount + 1);
    setListItem(
      listItem.map((d1)=>{
      if(d1.id === data.id){
        return{...d1,inCart : true}
      }
      return d1;
    }));
  };
  return (
    <section className="featured">
      <h1 className="heading">
        <span>featured books</span>
      </h1>
      <div className="featured-slider" style={{ padding: "5rem 0 0" }}>
        <Swiper
          loop={true}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {listItem.map((data, key) => {
            return (
              <div key={key}>
                <SwiperSlide>
                  <div className="box">
                    <div className="icons">
                      <a className="fas fa-search"></a>
                      <a className="fas fa-heart"></a>
                      <a className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                      <img src={data.url} alt="" />
                    </div>
                    <div className="content">
                      <h3>{data.title}</h3>
                      <div className="price">
                        ${data.dis_price} <span>{data.price}</span>
                      </div>
                      <button className="btn" onClick={(event) => updateCart(data)} disabled={data.inCart} >
                        Add To Cart
                      </button>
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

export default Featured;

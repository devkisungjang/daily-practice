import React, { useRef, useState } from "react";
import "../styles/Responsive.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Swiper.css";

// import required modules
import { Pagination } from "swiper/modules";

// 이미지
import dogImage1 from "../assets/image/dog1.jpg";
import dogImage2 from "../assets/image/dog2.jpg";
import dogImage3 from "../assets/image/dog3.jpg";

const mainObj = [
  {
    index: "sec01",
    image: dogImage1,
    PostContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.",
  },
  {
    index: "sec02",
    image: dogImage2,
    PostContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.",
  },
  {
    index: "sec03",
    image: dogImage3,
    PostContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.",
  },
];

// const navBarObj = [
//   {
//     menu: "한식",
//     subMenu1: "떡볶이",
//     subMenu2: "김치찌개",
//     subMenu3: "청국장",
//   },
//   {
//     menu: "중식",
//     subMenu1: "짜장면",
//     subMenu2: "짬뽕",
//     subMenu3: "탕수육",
//   },
//   {
//     menu: "양식",
//     subMenu1: "치킨",
//     subMenu2: "파스타",
//     subMenu3: "피자",
//   },
// ];

// const filteredData = mainObj.filter((v, i) => i === 0);

const Responsive = () => {
  // 스와이퍼 커스텀

  return (
    <>
      <header>
        <div className="inner-left"></div>
        <div className="inner-right"></div>
      </header>
      <div className="navbar">
        <div className="navbar"></div>
        <div></div>
        <div></div>
      </div>
      <div className="contants-container">
        {mainObj.map((v, i) => (
          <section key={i} className={v.index}>
            <img src={v.image} alt="강아지 이미지" className="image" />
            <p>{v.PostContent}</p>
          </section>
        ))}
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={dogImage1} alt="" />
            <p>갱얼쥐</p>
            <p>갱얼쥐</p>
            <p>갱얼쥐</p>
            <p>갱얼쥐</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogImage2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogImage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogImage2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogImage3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <footer>코피라이트 : 장기성</footer>
    </>
  );
};

export default Responsive;

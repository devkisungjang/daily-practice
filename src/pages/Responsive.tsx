import React, { useRef, useState } from "react";
import "../styles/Responsive.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import classNames from "classnames";

// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Swiper.scss";
import { Pagination } from "swiper/modules";

// 이미지
import dogImage1 from "../assets/image/dog1.jpg";
import dogImage2 from "../assets/image/dog2.jpg";
import dogImage3 from "../assets/image/dog3.jpg";

// zustand
import useStore from "../zustand/animal";

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

// const filteredData = mainObj.filter((v, i) => i === 0);

const Responsive = () => {
  // zustand 스토어
  const { dropDownView }: any = useStore();

  return (
    <div className="resposive">
      <Header />
      <div className={"contants-container"}>
        {mainObj.map((v, i) => (
          <section key={i} className={v.index}>
            <img src={v.image} alt="강아지 이미지" className="image" />
            <p>{v.PostContent}</p>
          </section>
        ))}
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1235: {
              slidesPerView: 4,
            },
            935: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          {/* 스와이퍼 낱장 데이터 */}
          {mainObj.map((v, i) => (
            <SwiperSlide key={i}>
              <img src={v.image} alt="슬라이드 이미지" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default Responsive;

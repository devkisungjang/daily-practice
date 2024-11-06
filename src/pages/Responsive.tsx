import React from "react";
import "../styles/Responsive.scss";
import dogImage from "../assets/image/10_kjw9636.jpg";

const Responsive = () => {
  return (
    <>
      <header>반응형 테스트</header>
      <div className="contants-container">
        <section className="sec01">
          <img src={dogImage} alt="강아지 이미지" className="image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
          </p>
        </section>
        <section className="sec02">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
          </p>
          <img src={dogImage} alt="강아지 이미지" className="image" />
        </section>
        <section className="sec03">
          <img src={dogImage} alt="강아지 이미지" className="image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
          </p>
        </section>
      </div>
      <footer>footer</footer>
    </>
  );
};

export default Responsive;

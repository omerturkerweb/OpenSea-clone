import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const homeProducts = useSelector((state) => state.home.products);
  let transformPx = 0;
  let sliderStart = false;
  const clickedSlideButton = (buttonWay) => {
    const slides = document.querySelectorAll(".slide");
    if (buttonWay == "right" && transformPx < 1141) {
      sliderStart = true;
      transformPx += 380;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${transformPx}px)`;
      }
    } else if (buttonWay == "left" && sliderStart && transformPx > 0) {
      transformPx -= 380;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${transformPx}px)`;
      }
    }
  };

  return (
    <>
      <div className="home">
        <div
          onClick={() => clickedSlideButton("left")}
          className="button-left btn"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div
          onClick={() => clickedSlideButton("right")}
          className="button-right btn"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <span className="home-title">Explore, collect, and sell NFTs</span>
        <div className="slider">
          {homeProducts.map((homeProduct) => {
            return (
              <div
                key={homeProduct.id}
                className={`slide slide-${homeProduct.id} product-${homeProduct.id}`}
              >
                <div className="container-slide-img">
                  <img className="slide-img" src={homeProduct.imgUrl}></img>
                </div>

                <div className="product-slider">
                  <div className="product-slider-top">
                    <p> {homeProduct.name}</p>
                    {homeProduct.isVerified ? (
                      <i className="fa-regular fa-circle-check verified"></i>
                    ) : null}
                  </div>
                  <div className="product-slider-bottom">
                    <span className="value-price">
                      Floor : {homeProduct.value} ETH
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

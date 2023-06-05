import React from "react";
import module from "./Main.module.css";
import main from "../img/main-background.png";
import AppleSlider1 from "../img/Apple-Slider1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  return (
    <section className={module.section}>
      <div className={module.container}>
        <img className={module["active-img"]} src={main}></img>
      </div>
      <div>
        <Slider
          className={module.slider}
          slidesToShow={1}
          autoplay={true}
          speed={5000}
          lazyLoad={true}
        >
          <div>
            <img src={AppleSlider1} className={module["slider-img"]} />
          </div>
          <div>
            <img src={AppleSlider1} className={module["slider-img"]} />
          </div>
          <div>
            <img src={AppleSlider1} className={module["slider-img"]} />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Main;

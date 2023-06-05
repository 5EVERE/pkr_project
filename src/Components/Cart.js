import React from "react";
import style from "./Cart.module.css";
import shape from "../img/shape.png";
import AppleSlider1 from "../img/Apple-Slider1.png";

function Cart(props) {
  return (
    <div
      className={`${style["modal__wrapper"]} ${
        props.isOpened ? style["open"] : style["close"]
      }`}
    >
      <div className={style["modal__body"]}>
        <div className={style["modal__close"]} onClick={props.onModalClose}>
          ×
        </div>
        <h2>
          КОРЗИНА <img src={shape}></img>
        </h2>
        <div className={style["modal__item"]}>
          <div className={style["modal__item_img"]}>
            <img src={AppleSlider1}></img>
          </div>
          <div className={style["modal__item_info"]}>
            <div className={style["modal__item_name"]}>iPhone 12 Pro</div>
            <div className={style["modal__item_descr"]}>
              Найкращий вибір для любителів
            </div>
            <div className={style["modal__item_down_info"]}>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_num"]}>1</div>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_price"]}>12 000 грн</div>
            </div>
          </div>
        </div>

        <div className={style["modal__item"]}>
          <div className={style["modal__item_img"]}>
            <img src={AppleSlider1}></img>
          </div>
          <div className={style["modal__item_info"]}>
            <div className={style["modal__item_name"]}>iPhone 12 Pro</div>
            <div className={style["modal__item_descr"]}>
              Найкращий вибір для любителів
            </div>
            <div className={style["modal__item_down_info"]}>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_num"]}>1</div>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_price"]}>12 000 грн</div>
            </div>
          </div>
        </div>

        <div className={style["modal__item"]}>
          <div className={style["modal__item_img"]}>
            <img src={AppleSlider1}></img>
          </div>
          <div className={style["modal__item_info"]}>
            <div className={style["modal__item_name"]}>iPhone 12 Pro</div>
            <div className={style["modal__item_descr"]}>
              Найкращий вибір для любителів
            </div>
            <div className={style["modal__item_down_info"]}>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_num"]}>1</div>
              <div className={style["modal__item_circle"]}></div>
              <div className={style["modal__item_price"]}>12 000 грн</div>
            </div>
          </div>
        </div>

        <div className={style["modal__footer"]}>
          <div className={style["modal__footer_sale"]}>
            Знижка зі всіх товарів: <span>33 000 грн</span>
          </div>
          <div className={style["modal__footer_full"]}>
            Всього: <span>51 000 грн</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

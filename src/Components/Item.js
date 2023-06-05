import React, { useState } from "react";
import style from "./Item.module.css";
import AppleSlider1 from "../img/Apple-Slider1.png";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import libra from "../img/libra.png";
import heart from "../img/heart.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Item() {
  const [imageSrcList, setImageSrcList] = useState([
    star1,
    star1,
    star1,
    star1,
    star1,
  ]);

  const handleImageClick = (index) => {
    const updatedImageSrcList = imageSrcList.map((src, i) => {
      if (i <= index) {
        return star2;
      } else {
        return src;
      }
    });

    setImageSrcList(updatedImageSrcList);
  };
  return (
    <div className={style["item"]}>
      <div className={style["container"]}>
        <div className={style["main"]}>
          <div className={style["left"]}>
            <Slider
              className={style.slider}
              slidesToShow={1}
              autoplay={true}
              speed={5000}
              lazyLoad={true}
            >
              <div>
                <img src={AppleSlider1} className={style["slider-img"]} />
              </div>
              <div>
                <img src={AppleSlider1} className={style["slider-img"]} />
              </div>
              <div>
                <img src={AppleSlider1} className={style["slider-img"]} />
              </div>
            </Slider>
          </div>
          <div className={style["right"]}>
            <div className={style["title"]}>iPhone 13 Pro</div>
            <div className={style["first__info"]}>
              <div className={style["green_red"]}>В наявності</div>
              <div>
              {imageSrcList.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => handleImageClick(index)}
                  ></img>
                ))}
              </div>
              <div className={style["right__comm"]}>2 відгука</div>
            </div>
            <div className={style["price"]}>12 000 грн</div>
            <div className={style["order"]}>
              <button className={style["buy"]}>Купити</button>
              <img className={style["libra"]} src={libra}></img>
              <img className={style["heart"]} src={heart}></img>
            </div>
            <div className={style["second__info"]}>
              <div className={style["second__info1"]}>
                Оплата. Оплата під час отримання товару, Google Pay, Картою
                онлайн, Безготівковими для юридичних осіб, Безготівковий для
                фізичних осіб, Apple Pay, Visa, Mastercard
              </div>
              <div className={style["second__info2"]}>
                Гарантія. 12 місяців Обмін/повернення товару впродовж 14 днів
              </div>
            </div>
          </div>
        </div>
        <div className={style["descr"]}>
          <div className={style["descr__title"]}>Опис товару</div>
          <div className={style["descr__text"]}>
            Apple iPhone 13 Pro оснастили OLED-екраном із частотою 120 Гц, що
            забезпечує йому високу плавність роботи. Щільність пікселів тут не
            рекордна, проте зображення має чудову чіткість. Яскравість теж
            відмінна, тому зйомка під яскравими променями сонця не завдасть
            незручностей. Виріз у дисплеї став трохи компактнішим, а значить
            його корисна площа стала більшою.
          </div>
        </div>
        <div className={style["info"]}>
          <div className={style["descr__title"]}>Характеристики</div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Дисплей:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Об'єм пам'яті:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Чіп:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Камера:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Батарея:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>OS:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>

          <div className={style["info__div"]}>
            <div className={style["info__text"]}>Вага:</div>
            <hr></hr>
            <div className={style["info__text"]}>6.1 OLED</div>
          </div>
        </div>
        <div className={style["comments"]}>
          <div className={style["descr__title"]}>Відгуки покупців</div>
          <div className={style["comments__div"]}>
            <div className={style["comments__header"]}>
              <div className={style["comments__title"]}>Головний Чел</div>
              <div className={style["comments__star"]}>
                {imageSrcList.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => handleImageClick(index)}
                  ></img>
                ))}
              </div>
              <div className={style["comments__date"]}>23 січня 2023</div>
            </div>
            <hr></hr>
            <div className={style["comments__text"]}>
              Надзвичайно класний смартфон, коритуюсь вже 3 місяці все просто
              бомбезно
            </div>
          </div>

          <div className={style["comments__div"]}>
            <div className={style["comments__header"]}>
              <div className={style["comments__title"]}>Головний Чел</div>
              <div className={style["comments__star"]}>
              {imageSrcList.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => handleImageClick(index)}
                  ></img>
                ))}
              </div>
              <div className={style["comments__date"]}>23 січня 2023</div>
            </div>
            <hr></hr>
            <div className={style["comments__text"]}>
              Надзвичайно класний смартфон, коритуюсь вже 3 місяці все просто
              бомбезно
            </div>
          </div>

          <div className={style["comments__div"]}>
            <div className={style["comments__header"]}>
              <div className={style["comments__title"]}>Головний Чел</div>
              <div className={style["comments__star"]}>
              {imageSrcList.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => handleImageClick(index)}
                  ></img>
                ))}
              </div>
              <div className={style["comments__date"]}>23 січня 2023</div>
            </div>
            <hr></hr>
            <div className={style["comments__text"]}>
              Надзвичайно класний смартфон, коритуюсь вже 3 місяці все просто
              бомбезно
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

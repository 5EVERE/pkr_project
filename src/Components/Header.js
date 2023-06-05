import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../img/logo1.svg";
import shape from "../img/shape.png";

function Header(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const items = [{ text: "ГОЛОВНА" }, { text: "КАТАЛОГ" }, {text: "Увійти"}];

  const activeClass = style.active;
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img src={logo} alt="logo"></img>
          </div>
          <ul className={style.list}>
            {items.map((item, i) => (
              <li
                key={i}
                className={i === activeIndex ? activeClass : ""}
                onClick={() => handleClick(i)}
              >
                <a>{item.text}</a>
              </li>
            ))}
          </ul>
          <button onClick={() => props.setModal(true)} className={style.button}>
            КОРЗИНА <img src={shape} alt="shape"></img>
          </button>
        </div>
      </div>
      <div className={style.active}></div>
    </header>
  );
}

export default Header;

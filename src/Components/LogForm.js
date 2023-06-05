import React from "react";
import style from "./LogForm.module.css";

function LogForm() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["body"]}>
        <div className={style["title"]}>Зареєструватись</div>
        <div className={style["descr"]}>Увійти за допомогою</div>
        <div className={style["buttons"]}>
          <button className={style["facebook"]}>FACEBOOK</button>
          <button className={style["google"]}>GOOGLE</button>
          <button className={style["twitter"]}>TWITTER</button>
        </div>
        <div className={style["form"]}>
            <form>
                <label for="email">Email</label>
                <input type="email" name="email"></input>
                <label for="password">Password</label>
                <input type="password" name="password"></input>
                <a>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</a>
                <button type="submit">LOGIN</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default LogForm;

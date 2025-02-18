import React from "react";
import styles from "./Content.module.css";
import PrivacyPolicy from "../PrivacyPolicy";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from "../../resources/logo_black.svg";
import main from "../../resources/img.png";

import tg from "../../resources/icons/tg.svg";
import inst from "../../resources/icons/inst.svg";
import vk from "../../resources/icons/vk.svg";

import UserAgreement from "../UserAgreement";
import MainApiConstants from "../../constants/api/main.api";

const Content = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["item-1"]}>
        <img className={styles["item-1-img"]} src={main} />
      </div>
      <div className={styles["item-2"]}>
        <div className={styles["item-logo"]}>
          <img src={logo} />
        </div>

        <div className={styles["item-text"]}>
          <h1>
            “Пятое измерение” - практики, <br />
            способные изменить твою <br />
            жизнь к лучшему
          </h1>
          <h2>
            Саморазвивайся в области здоровья, любви, отношений, денег,
            концентрации, предназначения. Здесь ты найдешь свои личные ключи к
            Счастью.
          </h2>
        </div>
        <div className={styles["item-icons"]}>
        <a href="https://web.telegram.org/k/#@Magickristy"
            className={styles["item-icons-btn-tg"]}
            onClick={async () => {
            }}
          >
            {" "}
            <img className={styles["icon"]} src={tg} />
          </a>

          <a href="https://instagram.com/magickristy?igshid=YmMyMTA2M2Y="
            className={styles["item-icons-btn-tg"]}
            onClick={async () => {
            }}
          >
            {" "}
            <img className={styles["icon"]} src={inst} />
          </a>

          <a href="https://vk.com/grigoryeva_kristina"
            className={styles["item-icons-btn-tg"]}
            onClick={async () => {
            }}
          >
            {" "}
            <img className={styles["icon"]} src={vk} />
          </a>

        </div>
        <a href={`${MainApiConstants.main_server}/data/app/app.apk`} download>
          <button
            className={styles["btn"]}
            onClick={async () => {
              /*const resp = await fetch(
                  'http://localhost:5000/api/user/download/app',
                  {
                    method: "GET"
                  }
                );*/
              //console.log(resp);
            }}
          >
            {" "}
            Скачать приложение
          </button>
        </a>

        <div className={styles["item-pp"]}>
        <NavLink
          to="/5measurement/policy"
          element={PrivacyPolicy}
          className={styles["pp"]}
        >
          {" "}
          Политика конфиденциальности{" "}
        </NavLink>
        <NavLink
          to="/5measurement/agreement"
          element={UserAgreement}
          className={styles["pp"]}
        >
          {" "}
          Пользовательское соглашение{" "}
        </NavLink>
      </div>
      </div>

    </div>
  );
};

export default Content;

import React, { useState } from "react";
import { withNaming } from "@bem-react/classname";
import logoBlackImg from "../../common/images/logo/logo_black.svg";
import phoneCallImg from "../../common/images/icons/phone-call.svg";
import "./Header.scss";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

const Header = ({ className, title = "" }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const [showMenu, setShowMenu] = useState(false);
  const style = cn("header");

  const handlerMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className={style(null, { bg: "white" }[className])} id="header">
      <div className="header__inner">
        <a className="header__logo logo-header" href="/">
          <img
            className="logo-header__img"
            src={logoBlackImg}
            alt="Logo: World Sci Publ"
          />
          <h3
            className="logo-header__label text
                text_color_gray-blue
                text_weight_bold"
          >
            Publication service <br />
            World Sci Publ
          </h3>
        </a>
        <ul className="header__action">
          <li className="header__action-item header__action-item_call">
            <a
              className="call-btn"
              id="header-call-btn"
              href="tel:+74951277926"
              data-formsended="call_1"
            >
              <img className="call-btn__img" src={phoneCallImg} alt="phone" />
              <span className="text call-btn__label">
                +7 (495) 127 - 79 - 26
              </span>
            </a>
          </li>
          <li className="header__action-item">
            <button
              className={`burger ${!!showMenu ? "is_active" : ""}`}
              onClick={handlerMenu}
            >
              <span className="burger__item"></span>
              <span className="burger__item"></span>
              <span className="burger__item"></span>
            </button>
          </li>
        </ul>
      </div>
      <DrawerMenu showMenu={showMenu} />
    </header>
  );
};

export default Header;

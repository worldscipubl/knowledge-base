import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withNaming } from "@bem-react/classname";
import Typography from "../Typography";
import ImgButton from "../ImgButton";
import arrowImg from "../../common/images/icons/arrow.svg";
import "./NavBar.scss";

const NavBar = ({ className, title = "" }) => {
  const history = useHistory();
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("navbar");

  const BackBtn = () => (
    <ImgButton
      className={style("nav-action")}
      img={arrowImg}
      appearance={{ mirrorY: true }}
      onClick={(e) => {
        history.goBack();
      }}
    />
  );

  const NextBtn = () => (
    <ImgButton
      className={style("nav-action")}
      img={arrowImg}
      onClick={(e) => {
        history.goForward();
      }}
    />
  );

  return (
    <div className={style(null, [className])}>
      <div className={style("inner")}>
        <div className={style("nav-actions")}>
          <BackBtn />
          <NextBtn />
        </div>
        <Typography
          className={style("title")}
          tag="h1"
          appearance={{
            size: "accent",
            color: "gray-blue",
            align: "center",
          }}
        >
          {title || ""}
        </Typography>
        <div className={style("share-actions")}></div>
      </div>
    </div>
  );
};

export default NavBar;

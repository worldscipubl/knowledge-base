import React from "react";
import { withNaming } from "@bem-react/classname";
import "./ImgButton.scss";

const ImgButton = ({
  className,
  img,
  appearance: { mirrorY } = {},
  onClick,
}) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("img-button");
  return (
    <button
      className={style(null, [className])}
      onClick={(event) => onClick && onClick(event)}
    >
      <img className={style("img", { mirrorY })} src={img} />
    </button>
  );
};

export default ImgButton;

import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Button.scss";

const Button = ({ className, children }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("button");
  return <button className={style(null, [className])}>{children}</button>;
};

export default Button;

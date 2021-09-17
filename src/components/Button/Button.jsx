import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Button.scss";

const Button = ({
  className,
  children,
  mode,
  appearance: { color, size, type, full = false } = {},
  ...props
}) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("button");

  console.log(type);

  if (mode == "link") {
    return (
      <a
        className={style("", { type: type, full: !!full }, [className])}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={style(null, { type: type }[className])} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;

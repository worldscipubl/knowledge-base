import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ className, children }) => {
  const style = classNames(styles.button, className, {});
  return <button className={style}>{children}</button>;
};

export default Button;

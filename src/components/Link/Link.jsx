import React from "react";
import classNames from "classnames";
import styles from "./Link.module.scss";

const Link = ({ className, children }) => {
  const style = classNames(styles.link, className, {});
  return (
    <a href="/#" className={style}>
      {children}
    </a>
  );
};

export default Link;

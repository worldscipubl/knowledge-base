import React from "react";
import "./Loader.scss";

const Loader = ({ className }) => {
  const style = "loader " + className;
  return <div className={style}>Загрузка...</div>;
};

export default Loader;

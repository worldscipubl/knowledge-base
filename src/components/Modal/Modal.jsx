import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Modal.scss";
import Button from "../Button";

const Modal = ({ className, children, active, setActive, ...props }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("Modal");

  return (
    <section
      className={style("", { active: active }, [className])}
      onClick={() => setActive && setActive(false)}
    >
      <div className={style("inner")} onClick={(e) => e.stopPropagation()}>
        <div className={style("content")}>{children}</div>
        <Button
          className={style("btn-cancel")}
          appearance={{ type: "main" }}
          onClick={() => setActive && setActive(false)}
        >
          Отмена
        </Button>
      </div>
    </section>
  );
};

export default Modal;

import React, { useEffect } from "react";
import { withNaming } from "@bem-react/classname";
import { NavLink } from "react-router-dom";
import Typography from "../Typography";
import folderImg from "../../common/images/icons/folder.svg";
import filePdfImg from "../../common/images/icons/file-pdf.svg";
import "./ExplorerItem.scss";

const ExplorerItem = ({ className, title, type, id }) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("explorer-item");

  useEffect(() => {
    setTimeout(forceUpdate, 1000);
  }, []);

  return (
    <NavLink
      to={id ? (type === "file" ? `/viewer/${id}` : `/explorer/${id}`) : false}
      className={style(null, [className])}
    >
      <div className={style("inner")}>
        <img
          className={style("img")}
          src={type === "folder" ? folderImg : filePdfImg}
          alt=""
        />
        <Typography
          className={style("title")}
          tag="h3"
          appearance={{ size: "default", color: "gray-blue" }}
        >
          {title}
        </Typography>
      </div>
    </NavLink>
  );
};

export default ExplorerItem;

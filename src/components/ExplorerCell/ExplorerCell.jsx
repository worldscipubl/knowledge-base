import React from "react";
import { withNaming } from "@bem-react/classname";
import { NavLink } from "react-router-dom";
import Typography from "../Typography";
import folderImg from "../../common/images/icons/folder.svg";
import filePdfImg from "../../common/images/icons/file-pdf.svg";
import "./ExplorerCell.scss";

const ExplorerCell = ({ className, title, type, id }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("explorer-cell");

  return (
    <NavLink
      to={
        id
          ? type === "file"
            ? `/viewer/${id}/${title}`
            : `/explorer/${id}/${title}`
          : false
      }
      className={style(null, [className])}
    >
      <div className={style("inner")}>
        <div className={style("body")}>
          <img
            className={style("img")}
            src={type === "folder" ? folderImg : filePdfImg}
          />
        </div>
        <div className={style("footer")}>
          <Typography
            className={style("title")}
            tag="h3"
            appearance={{ size: "default", color: "gray-blue" }}
          >
            {title}
          </Typography>
        </div>
      </div>
    </NavLink>
  );
};

export default ExplorerCell;

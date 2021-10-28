import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../Typography";
import folderImg from "../../common/images/icons/folder.svg";
import filePdfImg from "../../common/images/icons/file-pdf.svg";
import "./ExplorerItem.scss";

const ExplorerItem = ({ className, title, type, id }) => {
  return (
    <NavLink
      to={id ? (type === "file" ? `/viewer/${id}` : `/explorer/${id}`) : false}
      className="explorer-item"
    >
      <div className="explorer-item explorer-item__inner">
        <img
          className="explorer-item explorer-item__img"
          src={type === "folder" ? folderImg : filePdfImg}
          alt=""
        />
        <Typography
          className="explorer-item explorer-item__title"
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

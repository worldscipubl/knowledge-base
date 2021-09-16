import React from "react";
import { withNaming } from "@bem-react/classname";
import "./DocsViewer.scss";

const DocsViewer = ({ fileId, className }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("docs-viewer");

  if (!fileId) return <h2>Загрузка...</h2>;

  return (
    <div className={style(null, [className])}>
      <iframe
        className={style("inner")}
        src={`https://drive.google.com/file/d/${fileId}/preview`}
      />
    </div>
  );
};

export default DocsViewer;

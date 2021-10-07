import React from "react";
import { withNaming } from "@bem-react/classname";
import "./DocsViewer.scss";
import Loader from "../Loader";

const DocsViewer = ({ fileId, title, className }) => {
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("docs-viewer");

  const IFrame = ({ className, fileId }) => {
    const url = `https://api.worldscipubl.com/v1/knowledge-base/file/${fileId}`;
    const docViewer = `https://docs.google.com/gview?url=${url}&embedded=true`;

    return <iframe className={className} title={title} src={docViewer} />;
  };

  if (!fileId) return <h2>Not found...</h2>;

  return (
    <div className={style(null, [className])}>
      <IFrame className={style("inner")} fileId={fileId} />
      <Loader className={style("loader")} />
    </div>
  );
};
export default DocsViewer;

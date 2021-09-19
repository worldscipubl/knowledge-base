import React, { useState } from "react";
import { withNaming } from "@bem-react/classname";
import "./DocsViewer.scss";
import Loader from "../Loader";

const DocsViewer = ({ fileId, title, className }) => {
  const [loading, setLoading] = useState(true);
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("docs-viewer");
  const hideSpinner = () => {
    console.log("hideSpinner");
  };

  if (!fileId) return <h2>Not found...</h2>;
  // if (loading) return <Loader />;
  return (
    <div className={style(null, [className])}>
      <iframe
        className={style("inner")}
        title={title}
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        onLoad={hideSpinner}
      />
    </div>
  );
};

export default DocsViewer;

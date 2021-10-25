import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DocsViewer from "../../components/DocsViewer";
import "./ViewerPage.scss";

const ViewerPage = ({ setTitle, setId }) => {
  const { fileId } = useParams();

  useEffect(() => {
    if (setId) setId(fileId);
  }, [fileId]);

  return (
    <div className="viewer-page">
      <DocsViewer className="" title={"folderName"} fileId={fileId} />
    </div>
  );
};

export default ViewerPage;

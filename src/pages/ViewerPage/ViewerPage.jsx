import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DocsViewer from "../../components/DocsViewer";
import "./ViewerPage.scss";
import knowledgeService from "../../services/KnowledgeService";

const ViewerPage = ({ setTitle, setId }) => {
  const { fileId } = useParams();

  useEffect(() => {}, [fileId]);

  return (
    <div className="viewer-page">
      <DocsViewer className="" title={"folderName"} fileId={fileId} />
    </div>
  );
};

export default ViewerPage;

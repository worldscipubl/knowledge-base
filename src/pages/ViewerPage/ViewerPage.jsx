import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import knowledgeService from "../../services/KnowledgeService";
import DocsViewer from "../../components/DocsViewer";
import "./ViewerPage.scss";

const ViewerPage = ({ setTitle }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const history = useHistory();
  const { fileId, folderName } = useParams();

  useEffect(() => {
    setTitle && setTitle(folderName);
  }, [fileId, folderName]);

  return (
    <div className="viewer-page">
      <DocsViewer className="" fileId={fileId} />
    </div>
  );
};

export default ViewerPage;

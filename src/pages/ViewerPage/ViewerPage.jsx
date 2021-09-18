import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DocsViewer from "../../components/DocsViewer";
import "./ViewerPage.scss";
import knowledgeService from "../../services/KnowledgeService";

const ViewerPage = ({ setTitle, setId }) => {
  const { fileId } = useParams();

  useEffect(() => {
    setId && setId(fileId);
    knowledgeService
      .getFileById(fileId)
      .then((data) => {
        // data && data[0] && setTitle && setTitle(data[0]?.parentName);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [fileId]);

  return (
    <div className="viewer-page">
      <DocsViewer className="" title={"folderName"} fileId={fileId} />
    </div>
  );
};

export default ViewerPage;

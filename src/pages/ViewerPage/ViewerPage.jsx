import React from "react";
import { useHistory, useParams } from "react-router-dom";

const ViewerPage = () => {
  const history = useHistory();
  const { fileId } = useParams();

  return (
    <div>
      <h2>viewer</h2>
      <p>{'fileId: ' + fileId}</p>
    </div>
  );
};

export default ViewerPage;

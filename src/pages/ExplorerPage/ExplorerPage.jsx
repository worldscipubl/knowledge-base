import React from "react";
import knowledgeService from "../../services/KnowledgeService";

const ExplorerPage = () => {
  knowledgeService
    .getRootDir()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <h2>ExplorerPage</h2>
    </div>
  );
};

export default ExplorerPage;

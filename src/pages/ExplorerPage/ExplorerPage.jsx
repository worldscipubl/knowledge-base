import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import knowledgeService from "../../services/KnowledgeService";
import ExplorerCell from "../../components/ExplorerCell";
import "./ExplorerPage.scss";

const ExplorerPage = ({ setTitle }) => {
  const { folderId, folderName } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const getResource = (folderId) => {
    if (!folderId) return knowledgeService.getRootDir();
    return knowledgeService.getDirById(folderId);
  };

  useEffect(() => {
    getResource(folderId)
      .then((data) => {
        console.log(data);
        setData(data);
        setTitle && setTitle(folderName);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [folderId, folderName]);

  if (loading) return <h2>Загрузка...</h2>;

  return (
    <div className="explorer">
      {data.map(({ id, name, type }) => (
        <ExplorerCell key={id} id={id} title={name} type={type} />
      ))}
    </div>
  );
};

export default ExplorerPage;

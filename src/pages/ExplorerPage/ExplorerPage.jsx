import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import knowledgeService from "../../services/KnowledgeService";
import ExplorerCell from "../../components/ExplorerCell";
import "./ExplorerPage.scss";

const ExplorerPage = () => {
  const history = useHistory();
  const { folderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const getResource = (folderId) => {
    if (!folderId) return knowledgeService.getRootDir();
    return knowledgeService.getDirById(folderId);
  };

  useEffect(() => {
    getResource(folderId)
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [folderId]);

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

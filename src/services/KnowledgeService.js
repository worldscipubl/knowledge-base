import ApiService from "./ApiService";

class KnowledgeService extends ApiService {
  getRootDir = () => {
    return new Promise((resolve, reject) => {
      this.getResource({
        url: "/knowledge-base",
      })
        .then((response) => {
          if (response.data) resolve(response.data);
          else reject(new Error("No data"));
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };

  getDirById = (folderId) => {
    return new Promise((resolve, reject) => {
      this.getResource({
        url: `/knowledge-base/folder/${folderId}`,
      })
        .then((response) => {
          if (response.data) resolve(response.data);
          else reject(new Error("No data"));
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };

  getFileById = (fileId) => {
    return new Promise((resolve, reject) => {
      this.getResource({
        url: `/knowledge-base/file/${fileId}`,
      })
        .then((response) => {
          if (response.data) resolve(response);
          else reject(new Error("No data"));
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };

  downloadFileById = (fileId) => {
    return new Promise((resolve, reject) => {
      this.getResource({
        url: `/knowledge-base/file-download/{fileId}${fileId}`,
      })
        .then((response) => {
          if (response.data) resolve(response.data);
          else reject(new Error("No data"));
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };
}

const knowledgeService = new KnowledgeService();
export default knowledgeService;

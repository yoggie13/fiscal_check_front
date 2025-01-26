import apiRoutes from "./api";

export default class Services {
  static saveACheck = async (data) => {
    return await apiRoutes.POST("/scan", data);
  };
}

import api from "../api";

export const endPoint = "/factionlist";

export const getGamelist = async () => {
  const response = await api.post(endPoint);
  return response.data;
};
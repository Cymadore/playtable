import api from "../api";

export const endPoint = "/factionlist";

export const getFactionlist = async (game) => {
  const response = await api.post(endPoint, {game});
  return response.data;
};
import api from "../api";

export const endPoint = "/factionlist";

export const getFactionlist = async (game) => {
    console.log(game)
  const response = await api.post(endPoint, {game});
  console.log(response.data)
  return response.data;
};
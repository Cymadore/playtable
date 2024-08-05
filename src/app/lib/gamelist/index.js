import api from "../api";

export const endPoint = "/gamelist";

export const getGamelist = async () => {
  const response = await api.get(endPoint);
  return response.data;
};

export const getGameData = async (url) => {
  const response = await api.get(url);
  return response.data;
} 

export const getResultGamelist = async () => {
  const response = await api.get(`${endPoint}/addresult`);
  return response.data;
}

// export const getShopDistance = async (shop) => {
//   console.log(shop)
//   const response = await api.post(`${endPoint}/distance`, {shop});
//   return response.data;
// };

// export const addShop = async (shop) => {
//   console.log('error here')
//   console.log(shop)
//   const response = await api.post(endPoint, { shop });
//   return response.data;
// };

// export const updateShop = async (shop) => {
//   const response = await api.patch(`${endPoint}/${shop.id}`, shop);
//   return response.data;
// };

// export const deleteShop = async (shop) => {
//   console.log(shop);
//   const response = await api.delete(`${endPoint}}/${shop.id}`);
//   return response.data;
// };



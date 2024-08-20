import api from "../api";

export const endPoint = "/result";

export const getMatch = async () => {
  const response = await api.get(endPoint);
  return response.data;
};

export const getUser = async (url) => {
  const response = await api.get(url);
  return response.data;
};

export const addMatch = async (data) => {
  const response = await api.post(endPoint, {data});
  return response.data;
}

export const matchByUser = async (url) => {
  const response = await api.get(url);
  return response.data  
}
// export const getGameData = async (url) => {
//   const response = await api.get(url);
//   return response.data;
// } 

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



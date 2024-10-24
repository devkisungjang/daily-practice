import api from "../axios/animalApi";

// get 요청
export const getDog = async () => {
  const response = await api.get("/dogs");
  return response.data;
};

export const getCat = async () => {
  const response = await api.get("/cats");
  return response.data;
};

// post 요청
export const postDog = async (body: any) => {
  const response = await api.get("/dogs", body);
  return response.data;
};

export const postCat = async (body: any) => {
  const response = await api.get("/cats", body);
  return response.data;
};

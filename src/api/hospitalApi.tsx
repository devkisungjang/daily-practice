import api from "../axios/anatomyApi";

// 병원 정보에 관한 api
export const getHospitals = async (body: any) => {
  const response = await api.post("/v1/mi/searchlp?page=0&size=3", body);
  return response.data;
};

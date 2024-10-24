import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  // Refresh Token -> 엑세스 토큰 만료됐을때 새로운 엑세스 토큰을 받을 수 없음
  "Refresh-Token": null,
};
const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers,
});

export default instance;

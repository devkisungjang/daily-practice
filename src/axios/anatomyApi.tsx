import axios from "axios";

const headers = {
  // 데이터가 JSON 형식임을 알려줌
  "Content-Type": "application/json;charset=UTF-8",
  // 타 웹사이트에서도 데이터 접근을 허용
  "Access-Control-Allow-Origin": "*",
  // 요청 보낼때 로그인 또는 인증정보가 없음을 말함
  Authorization: null,
  // Refresh Token -> 엑세스 토큰 만료됐을때 새로운 엑세스 토큰을 받을 수 없음
  "Refresh-Token": null,
};
const instance = axios.create({
  baseURL: "https://apid.iharu.co.kr",
  headers,
});

export default instance;

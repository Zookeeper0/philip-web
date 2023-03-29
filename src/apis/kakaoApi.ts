import axiosInstance from "./index";

export function kakaoLoginAPI(code: any) {
  return axiosInstance
    .post("/user/kakao", { authCode: code })
    .then((response) => response.data);
}

export function getKakaoUsers() {
  return axiosInstance.get("/user/kakao").then((response) => response.data);
}

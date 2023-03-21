import axiosInstance from "./index";

export function cookieAPI() {
  return axiosInstance.get("/app").then((response) => response.data);
}

export function getVisitCount() {
  return axiosInstance.get("/app/visit").then((response) => response.data);
}

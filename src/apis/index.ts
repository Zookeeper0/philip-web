import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token: any) => {
  AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${
    token || localStorage.getItem("kakaoSignKey")
  }`;
};

export default AxiosInstance;

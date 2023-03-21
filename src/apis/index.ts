import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      `${
        typeof window !== "undefined"
          ? window.localStorage.getItem("kakaoSignKey") ||
            window.localStorage.getItem("adminSignKey")
          : null
      }`,
  },
});

export default AxiosInstance;

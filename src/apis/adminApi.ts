import axiosInstance from "./index";

/** POST 회원가입  */
export function signUpAPI(data: {
  adminId: string;
  password: string;
  name: string;
  birth: string;
}) {
  return axiosInstance
    .post("/admin/signup", data)
    .then((response) => response.data);
}

/** POST 로그인 */
export function logInAPI(data: { adminId: string; password: string }) {
  return axiosInstance
    .post("/admin/signin", data)
    .then((response) => response.data);
}

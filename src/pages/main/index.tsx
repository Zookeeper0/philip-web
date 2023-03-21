import MainPage from "@/components/templates/MainPage";
import { adminTokenState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Main = () => {
  /** 사용자 인증 로컬 저장  */
  const [token, setToken]: any = useRecoilState(adminTokenState);
  const [userToken, setUserToken]: any = useRecoilState(userTokenState);

  // useEffect(() => {
  //   const adminInfo = JSON.parse(localStorage.getItem("signKey") || "{}");
  //   const userInfo = JSON.parse(localStorage.getItem("kakaoSignKey") || "{}");
  //   if (adminInfo || userInfo) {
  //     setToken(adminInfo);
  //     setUserToken(userInfo);
  //   }
  // }, [token, userToken]);
  return <MainPage />;
};

export default Main;

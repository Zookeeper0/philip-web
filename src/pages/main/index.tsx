import MainPage from "@/components/templates/MainPage";
import { adminTokenState } from "@/recoil/adminToken";
import { cityState } from "@/recoil/city";
import { userTokenState } from "@/recoil/userToken";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Main = () => {
  /** 관리자 인증 로컬 저장  */
  const [token, setAdminToken]: any = useRecoilState(adminTokenState);
  /** 사용자 인증 로컬 저장  */
  const [userToken, setUserToken]: any = useRecoilState(userTokenState);
  const city = useRecoilValue(cityState);

  console.log("city", city);
  useEffect(() => {
    const userInfo = localStorage.getItem("kakaoSignKey");
    const adminInfo = localStorage.getItem("adminSignKey");
    setUserToken(userInfo);
    setAdminToken(adminInfo);
  }, []);
  return <MainPage />;
};

export default Main;

import MainPage from "@/components/templates/MainPage";
import { adminTokenState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Main = () => {
  const [token, setToken]: any = useRecoilState(adminTokenState);
  /** 사용자 인증 로컬 저장  */
  const [userToken, setUserToken]: any = useRecoilState(userTokenState);

  useEffect(() => {
    const userInfo = localStorage.getItem("kakaoSignKey");
    console.log("userInfo :", userInfo);

    setUserToken(userInfo);
  }, []);
  return <MainPage />;
};

export default Main;

import MainPage from "@/components/templates/MainPage";
import { userTokenState } from "@/recoil/userToken";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Main = () => {
  /** 사용자 인증 로컬 저장  */
  const [userToken, setUserToken]: any = useRecoilState(userTokenState);

  useEffect(() => {
    const userInfo = localStorage.getItem("kakaoSignKey");
    setUserToken(userInfo);
  }, []);
  return <MainPage />;
};

export default Main;

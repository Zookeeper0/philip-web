import { kakaoLoginAPI } from "@/apis/kakaoApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { userTokenState } from "@/recoil/userToken";

interface ResponseType {
  ok: boolean;
  error?: any;
}
const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;
  const [userToken, setUserToken] = useRecoilState(userTokenState);

  const mutation = useMutation("kakaoLoginAPI", kakaoLoginAPI, {
    onSuccess: (data) => {
      localStorage.setItem("kakaoSignKey", data);
      setUserToken(data);
      document.location.href = "/main";
    },
    onError: (error: any) => {
      console.log(error);
      const { response } = error;
      alert(response.data.message);
    },
  });

  useEffect(() => {
    if (authCode) {
      mutation.mutate(authCode);

      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
      alert(kakaoServerError);
    }
  }, [authCode, kakaoServerError, router]);

  return <h2>로그인 중입니다..</h2>;
};

export default Kakao;

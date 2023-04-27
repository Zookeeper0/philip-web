import { adminState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { AxiosError } from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useApiError = () => {
  const [admin, setAdmin] = useRecoilState(adminState);
  const [userToken, setUserToken] = useRecoilState(userTokenState);

  const handleError = useCallback((axiosError: AxiosError) => {
    const errorResponse = axiosError.response?.data as any;
    const status = errorResponse.statusCode;

    switch (status) {
      // 관리자 인증 에러
      case 401:
        localStorage.removeItem("admin");
        alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요");
        window.location.href = "/admin/login";
        break;
      default:
        break;
    }
  }, []);
  return { handleError } as const;
};

export default useApiError;

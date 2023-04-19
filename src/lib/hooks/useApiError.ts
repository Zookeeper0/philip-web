import { AxiosError } from "axios";
import { signOut } from "next-auth/react";
import { useCallback } from "react";

const useApiError = () => {
  const handleError = useCallback((axiosError: AxiosError) => {
    const errorResponse = axiosError.response?.data as any;
    const status = errorResponse.statusCode;

    switch (status) {
      case 401:
        alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요");
        signOut();
        break;
      default:
        break;
    }
  }, []);
  return { handleError } as const;
};

export default useApiError;

import { AdminSignupPage } from "@/components/templates/AdminSignupPage";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { signUpAPI } from "@/apis/adminApi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [passwordError, setPasswordError] = useState(false);

  const schema = yup
    .object({
      adminId: yup.string().nullable().required("구분을 선택해주세요"),
      password: yup.string().nullable().required("관리명을 입력해주세요"),
      passwordCheck: yup.string().nullable().required("파일을 등록해주세요"),
      name: yup.string().nullable().required("등록일을 선택해주세요"),
      birth: yup.string().nullable().required("사용여부를 선택해주세요"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Submit = (data: any) => {
    const { adminId, password, passwordCheck, name, birth } = data;
    if (password !== passwordCheck) {
      alert("비밀번호가 다릅니다.");
      return setPasswordError(true);
    }

    setLoading(true);
    signUpAPI({ adminId, password, name, birth })
      .then(() => {
        router.replace("/admin/success");
      })
      .catch((error) => {
        alert(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <AdminSignupPage
        handleSubmit={handleSubmit}
        Submit={Submit}
        register={register}
      />
    </>
  );
};

export default Login;

import { Button } from "@/components/atoms/Button";
import * as S from "./adminLoginBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";

export const AdminLoginBox = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  // 아이디 저장 체크박스 체크 유무
  const [isRemember, setIsRemember] = useState(false);
  // id, pw 상태저장
  const [userInfo, setUserInfo] = useState({ adminId: "", password: "" });

  /** 로그인 submit 버튼 */
  const onSubmitForm = async (e: any) => {
    // validate your userinfo
    e.preventDefault();
    // redirect : true => callbackUrl 설정할려면
    const response = await signIn("credentials", {
      adminId: userInfo.adminId,
      password: userInfo.password,
      redirect: false,
    });

    if (response?.error) {
      setErrorMessage(response?.error);
    }

    // 로그인 성공시 관리자 페이지로 이동
    if (response?.ok === true) {
      router.push("/admin");
    }
    // id저장 버튼 클릭됬다면 id 로컬스토리지에 저장
    if (isRemember) {
      localStorage.setItem("rememberUserId", userInfo.adminId);
    }
  };

  /** InputCheckbox checked 상태 변경 함수 */
  const handleOnChange = (e: any) => {
    setIsRemember(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("rememberUserId");
    }
  };

  /*페이지가 최초 렌더링 될 경우*/
  useEffect(() => {
    /*저장된 로컬값이 있으면, CheckBox TRUE 및 adminId에 값 셋팅*/
    if (localStorage.getItem("rememberUserId") !== null) {
      setUserInfo({
        ...userInfo,
        adminId: localStorage.getItem("rememberUserId")!,
      });
      setIsRemember(true);
    }
  }, []);

  return (
    <S.AdminLoginBox onSubmit={onSubmitForm}>
      <S.LoginTit>Login</S.LoginTit>
      <S.LoginInputBox>
        <InputText
          label="아이디"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          type={"text"}
          placeholder="아이디 입력"
          value={userInfo.adminId}
          onChange={({ target }: any) =>
            setUserInfo({ ...userInfo, adminId: target.value })
          }
        />
        <InputText
          label="비밀번호"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          type={"password"}
          placeholder="비밀번호 입력"
          value={userInfo.password}
          onChange={({ target }: any) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
        <InputCheckbox
          value="1"
          themeType="admin"
          layout="row"
          displayValue="아이디 저장"
          checked={isRemember}
          onChange={(e: Event) => {
            handleOnChange(e);
          }}
        />
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
      </S.LoginInputBox>

      <Button
        type="submit"
        width="100%"
        height={56}
        color="primary"
        layout="solid"
        label="로그인하기"
      />
      {/* <Button
        type="button"
        width="100%"
        height={56}
        color="mainBg"
        layout="solid"
        label="간편 회원가입"
        onClick={() => {
          router.replace("/admin/signup");
        }}
      /> */}
    </S.AdminLoginBox>
  );
};

import { Button } from "@/components/atoms/Button";
import * as S from "./adminSignupBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import { InputDate } from "@/components/atoms/Input/InputDate";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { AdminSignupPageProps } from "@/components/templates/AdminSignupPage";

export const AdminSignupBox = ({
  handleSubmit,
  Submit,
  register,
}: AdminSignupPageProps) => {
  const isWindowWidth = useWindowWidth();

  return (
    <S.LoginBox onSubmit={handleSubmit(Submit)}>
      <S.LoginTit>간편회원가입</S.LoginTit>
      <S.IdCheckWrapper>
        <InputText
          label={isWindowWidth < 769 ? "아이디" : "아아디"}
          layout={isWindowWidth < 769 ? "column" : "column"}
          size={isWindowWidth < 769 ? "xlg" : "md"}
          width="145px"
          placeholder={isWindowWidth < 769 ? "아이디 입력" : "아이디 입력"}
          register={register("adminId")}
        />
        <Button
          type="button"
          width="45px"
          height={30}
          color="mainBg"
          layout="solid"
          label="ID확인"
        />
      </S.IdCheckWrapper>

      <InputText
        label={isWindowWidth < 769 ? "비밀번호" : "비밀번호"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        type={"password"}
        placeholder={isWindowWidth < 769 ? "비밀번호 입력" : "비밀번호 입력"}
        register={register("password")}
      />
      <InputText
        label={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        type={"password"}
        placeholder={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        register={register("passwordCheck")}
      />
      <InputText
        label={isWindowWidth < 769 ? "이름" : "이름"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "이름 입력" : "이름 입력"}
        register={register("name")}
      />
      <InputDate
        label={isWindowWidth < 769 ? "생년월일" : "생년월일"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="190px"
        placeholder={isWindowWidth < 769 ? "생년월일 입력" : "생년월일 입력"}
        register={register("birth")}
      />
      <Button
        type="submit"
        width="100%"
        height={56}
        color="mainBg"
        layout="solid"
        label="회원가입"
      />
    </S.LoginBox>
  );
};

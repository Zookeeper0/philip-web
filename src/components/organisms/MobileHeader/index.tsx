import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./mobileHeader.style";
import ImgLogo from "public/assets/images/img-logo-01.png";
import IconBack from "public/assets/svg/icon-arrow-back.svg";
import IconUser from "public/assets/svg/icon-user.svg";
import { Button } from "@/components/atoms/Button";

export const MobileHeader = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goMain = () => {
    router.push("/main");
  };

  const goUser = () => {
    router.push("/user");
  };

  return (
    <S.MobileHeader>
      <Button
        type="button"
        width="64px"
        height={64}
        color="clear"
        layout="icon"
        onClick={goBack}
      >
        <IconBack width="28px" height="28px" viewBox="0 0 24 24" />
      </Button>
      <S.MobileHeaderImgBox onClick={goMain}>
        <S.MobileHeaderImgSpan>
          <Image src={ImgLogo} layout="fill" alt="필립 메인로고" />
        </S.MobileHeaderImgSpan>
      </S.MobileHeaderImgBox>
      <Button
        type="button"
        width="64px"
        height={64}
        color="clear"
        layout="icon"
        onClick={goUser}
      >
        <IconUser width="18px" height="18px" viewBox="0 0 12 12" />
      </Button>
    </S.MobileHeader>
  );
};

export default MobileHeader;

import { useRouter } from "next/router";
import * as S from "./mobileHeader.style";
import IconBack from "public/assets/svg/icon-arrow-back.svg";
import IconUser from "public/assets/svg/icon-user.svg";
import { Button } from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";

export const MobileHeader = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goUser = () => {
    router.push("/auth");
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
      <Logo main={true} mobile={true} />
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

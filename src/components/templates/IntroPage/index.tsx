import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./introPage.style";
import LogoWeb from "public/assets/images/img-logo-web.png";
import LogoMobile from "public/assets/images/img-logo-mobile.png";

export const IntroPage = () => {
  const [fadeItem, setFadeItem] = useState("fade-element");

  useEffect(() => {
    setTimeout(() => setFadeItem("fade-element delayed"), 2500);
  }, []);

  return (
    <S.IntroPage className={fadeItem}>
      <Image src={LogoWeb} alt="필립 로고" width={378} height={55} />
    </S.IntroPage>
  );
};

export default IntroPage;

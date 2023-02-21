import Logo from "@/components/atoms/Logo";
import * as S from "./footer.style";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterRow>
        <Logo main={false} />
        <S.FooterCopySpan>Philip. 2023. All rights reserved.</S.FooterCopySpan>
      </S.FooterRow>
    </S.Footer>
  );
};

export default Footer;

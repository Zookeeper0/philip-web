import Image from "next/image";
import Link from "next/link";
import * as S from "./logo.style";
import LogoMain from "public/assets/images/img-logo-01.png";
import LogoSub from "public/assets/images/img-logo-02.png";

interface LogoProps {
  main?: boolean;
  mobile?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ main, mobile }) => {
  return (
    <S.Logo main={main} mobile={mobile}>
      <Link href="/main">
        <Image
          src={main ? LogoMain : LogoSub}
          alt="메인로고"
          width={mobile ? 70 : main ? 120 : 90}
          height={mobile ? 24 : main ? 40 : 30}
        />
      </Link>
    </S.Logo>
  );
};

export default Logo;

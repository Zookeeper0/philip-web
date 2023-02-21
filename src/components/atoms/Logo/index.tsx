import Image from "next/image";
import Link from "next/link";
import * as S from "./logo.style";
import LogoMain from "public/assets/images/img-logo-01.png";
import LogoSub from "public/assets/images/img-logo-02.png";

interface LogoProps {
  main?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ main }) => {
  return (
    <S.Logo main={main}>
      <Link href="/main">
        <Image
          src={main ? LogoMain : LogoSub}
          alt="메인로고"
          width={main ? 120 : 90}
          height={main ? 40 : 30}
        />
      </Link>
    </S.Logo>
  );
};

export default Logo;

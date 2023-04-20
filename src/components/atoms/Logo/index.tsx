import Image from "next/image";
import Link from "next/link";
import * as S from "./logo.style";
import LogoMain from "public/assets/images/img-logo-01.png";
import LogoSub from "public/assets/images/img-logo-02.png";
import LogoAdmin from "public/assets/images/img-logo-light.png";
import { useRecoilState } from "recoil";
import { categoryState } from "@/recoil/category";
import { categoryAll } from "@/recoil/category";

interface LogoProps {
  main?: boolean;
  mobile?: boolean;
  footer?: any;
  admin?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ footer, main, mobile, admin }) => {
  const [category, setCategory] = useRecoilState(categoryState);

  /** 메인로고 클릭시 카테고리 상태 전체로 변경*/
  const onClick = () => {
    setCategory(categoryAll);
  };
  return (
    <S.Logo main={main} mobile={mobile} admin={admin}>
      <Link href={`${admin ? "/admin/store" : "/main"}`} onClick={onClick}>
        <Image
          src={
            main ? LogoMain : footer ? LogoMain : admin ? LogoAdmin : LogoSub
          }
          alt="메인로고"
          width={mobile ? 70 : main ? 120 : 90}
          height={mobile ? 24 : main ? 40 : 30}
        />
      </Link>
    </S.Logo>
  );
};

export default Logo;

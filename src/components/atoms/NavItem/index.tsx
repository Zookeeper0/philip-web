import * as S from "./navItem.style";

export const NavItem = (item: any) => {
  return (
    <S.NavItem>
      <span>{item.item.name}</span>
    </S.NavItem>
  );
};

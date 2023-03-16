import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { NavItem } from "@/components/atoms/NavItem";
import Data from "@/data/dummy";
import * as S from "./navList.style";
import IconArrowPrev from "public/assets/svg/icon-arrow-prev.svg";
import IconArrowNext from "public/assets/svg/icon-arrow-next.svg";

export const NavList = () => {
  const MENU_PER_SLIDE = 12;

  const [lastSlide, setLastSlide] = useState(0);
  const [firstSlide, setFirstSlide] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState<any | null>(
    Data.Menu.slice(1, 12)
  );

  useEffect(() => {
    setLastSlide(currentPage * MENU_PER_SLIDE);
    setFirstSlide(lastSlide - MENU_PER_SLIDE);
    setCurrentSlide(Data.Menu.slice(firstSlide, lastSlide));
  }, [Data.Menu, currentPage, firstSlide, lastSlide, MENU_PER_SLIDE]);

  const onPrevSlide = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextSlide = () => {
    if (Data.Menu.length / 12 > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Button
        type="button"
        width="20px"
        color="clear"
        layout="icon"
        onClick={onPrevSlide}
        disabled={currentPage === 1 ? true : false}
      >
        <IconArrowPrev />
      </Button>
      <S.NavList>
        {currentSlide.map((item: any, idx: number) => {
          return <NavItem item={item} key={idx} />;
        })}
      </S.NavList>
      <Button
        type="button"
        width="20px"
        color="clear"
        layout="icon"
        onClick={onNextSlide}
        disabled={Data.Menu.length / 12 <= currentPage ? true : false}
      >
        <IconArrowNext />
      </Button>
    </>
  );
};
import { useState } from "react";
import { getCategoryPostListApi } from "@/apis/postsApi";
import axios from "axios";
import { useQuery } from "react-query";
import * as S from "./navItem.style";
import { useRecoilState } from "recoil";
import { categoryState } from "../../../recoil/category";
import { useRouter } from "next/router";

export const NavItem = (item: any) => {
  // 카테고리 클릭시 해당 카테고리 관련 post 가져오기
  const [category, setCategory] = useRecoilState(categoryState);
  const router = useRouter();

  const onClick = () => {
    /** nav바 카테고리 요소 클릭시 recoil oid값 변경 */
    setCategory(item.item.oid);
    // 디테일 페이지에서 nav 클릭시 메인으로 이동
    if (router.pathname === "/main/post/[id]") {
      router.push("/main");
    }
  };

  return (
    <S.NavItem onClick={onClick}>
      <span>{item.item.name}</span>
    </S.NavItem>
  );
};

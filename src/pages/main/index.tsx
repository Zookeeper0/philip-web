import MainPage from "@/components/templates/MainPage";
import { adminState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState } from "@/recoil/category";
import { cityState } from "@/recoil/city";
import { useQuery } from "react-query";
import { getPostsListApi, getPromtionListApi } from "@/apis/postsApi";
import { getAdsData } from "@/apis/adsApi";
import { getVisitCount } from "@/apis/visitApi";
import { searchState } from "@/recoil/search";
import { getCategoryNavApi, getCityListApi } from "@/apis/categoryApi";

const Main = () => {
  /** 사용자 인증 로컬 저장  */
  const [userToken, setUserToken]: any = useRecoilState(userTokenState);
  //nav item 에서 현재 선택 카테고리
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);
  const currentCity = useRecoilValue(cityState);

  const [searchInput, setSearchInput] = useRecoilState(searchState);
  const [category, setCategoryState] = useRecoilState(categoryState);
  const [city, setCityState] = useRecoilState(cityState);

  const [cityOptions, setCityOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const { data: todayCount } = useQuery("getVisitCount", getVisitCount);
  // 방문자수 state
  const [count, setCount] = useState<any>([]);

  /** 광고 배너 데이터  */
  const { data: adsData } = useQuery("getAdsData", getAdsData);
  // GET 프로모션 포스트, 쿼리스트링 category
  const { data: postItem, isLoading } = useQuery(
    ["getPromtionListApi", currentCity, currentCategory],
    getPromtionListApi
  );

  /** 카테고리 select 목록 불러오기 */
  const { data: categoryItem } = useQuery(
    "getCategoryNavApi",
    getCategoryNavApi
  );
  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  /** 시티 목록 선택시 세팅 */
  const getCityOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityState(e.target.value);
    // 새로 고침 시 선택 city 유지
    localStorage.setItem("city", e.target.value);
  };

  const getCategoryOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryState(e.target.value);
  };

  useEffect(() => {
    setCategoryOptions(categoryItem);
    setCityOptions(cityItem);
  }, [categoryItem, cityItem]);

  /** getVisitCount로부터 오늘의 방문자수 얻어와서 처리 */
  useEffect(() => {
    const str = String(todayCount);
    const mapfn = (arg: string) => Number(arg);

    const newArr = Array.from(str, mapfn);

    setCount(newArr);
  }, [todayCount]);

  useEffect(() => {
    const userInfo = localStorage.getItem("kakaoSignKey");
    setUserToken(userInfo);
  }, []);
  return (
    <MainPage
      postItem={postItem}
      adsData={adsData}
      count={count}
      cityOptions={cityOptions}
      getCityOption={getCityOption}
      city={city}
      categoryOptions={categoryOptions}
      getCategoryOption={getCategoryOption}
      category={category}
      getValue={getValue}
    />
  );
};

export default Main;

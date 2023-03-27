import axios from "axios";
import axiosInstance from "./index";

/** GET 메인화면 전체게시글, 복수쿼리( 검색, 카테고리 )  */
export function getPostsListApi({ queryKey }: any) {
  return axiosInstance
    .get(
      `/posts?city=${queryKey[1]}&category=${queryKey[2]}&search=${queryKey[3]}`
    )
    .then((res) => res.data);
}

/** GET 게시글 클릭시 상세페이지 정보 */
export function detailPostApi(data: any) {
  return axiosInstance.get(`/posts/${data}`).then((res) => res.data[0]);
}

/** POST [관리자] 게시글 등록 */
export function addPostApi(data: FormData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axiosInstance
    .post("/posts", data, config)
    .then((response) => response.data);
}

export function fetchCountViews(oid: string) {
  return axiosInstance.patch(`/posts/${oid}`);
}

export function getPromtionListApi({ queryKey }: any) {
  return axiosInstance
    .get(`/posts/promotion?city=${queryKey[1]}&category=${queryKey[2]}`)
    .then((response) => response.data);
}

export function deletePost(oid: string) {
  return axiosInstance
    .delete(`/posts/${oid}`)
    .then((response) => response.data);
}

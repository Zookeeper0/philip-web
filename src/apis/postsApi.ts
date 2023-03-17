import axiosInstance from "./index";

/** GET 메인화면 전체게시글, 복수쿼리( 검색, 카테고리 )  */
export function getPostsListApi({ queryKey }: any) {
  console.log("postList IN");
  return axiosInstance
    .get(`/posts?category=${queryKey[1]}&search=${queryKey[2]}`)
    .then((res) => res.data);
}

/** GET 게시글 클릭시 상세페이지 정보 */
export function detailPostApi(data: any) {
  return axiosInstance.get(`/posts/${data}`).then((res) => res.data[0]);
}

/** POST [관리자] 게시글 등록 */
export function addPostApi(data: FormData) {
  return axiosInstance.post("/posts", data).then((response) => response.data);
}

export function fetchCountViews(oid: string) {
  return axiosInstance.patch(`/posts/${oid}`);
}

export function getPromtionListApi({ queryKey }: any) {
  console.log("promotion IN");
  return axiosInstance
    .get(`/posts/promotion?category=${queryKey[1]}`)
    .then((response) => response.data);
}

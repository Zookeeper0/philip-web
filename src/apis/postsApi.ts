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
  return axiosInstance.get(`/posts/test/${data}`).then((res) => res.data);
}

/** POST [관리자] 게시글 등록 */
export function addPostApi(data: Object) {
  return axiosInstance.post("/posts", data).then((response) => response.data);
}

/** PATCH 디테일 페이지 들어갈때 방문자수 카운트 */
export function fetchCountViews(oid: string) {
  return axiosInstance.patch(`/posts/${oid}`);
}

/** GET 프로모션 리스트  */
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

export function getAdminStorePosts({ queryKey }: any) {
  return axiosInstance
    .get(`/posts/store?search=${queryKey[1]}`)
    .then((response) => response.data);
}

export function uploadImagesAPI(data: FormData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axiosInstance
    .post("/posts/images", data, config)
    .then((response) => response.data);
}

export function deleteImagesAPI(data: string) {
  return axiosInstance
    .delete(`/posts/images/${data}`)
    .then((response) => response.data);
}

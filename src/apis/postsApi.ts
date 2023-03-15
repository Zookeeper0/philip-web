import axiosInstance from "./index";

export function getPostsListApi({ queryKey }: any) {
  return axiosInstance
    .get(`/posts?category=${queryKey[1]}`)
    .then((res) => res.data);
}

export function detailPostApi(data: any) {
  return axiosInstance.get(`/posts/${data}`).then((res) => res.data[0]);
}

export function getCategoryPostListApi(data: any) {
  return axiosInstance.get(`/posts/category/${data}`).then((res) => res.data);
}

export function addPostApi(data: FormData) {
  return axiosInstance.post("/posts", data).then((response) => response.data);
}

export function uploadImagesApi(data: any) {
  return axiosInstance
    .post("/posts/images", data)
    .then((response) => response.data);
}

// -----Nav 카테고리 불러오기 임시 -------
export function getCategoryNavApi() {
  return axiosInstance.get("/category").then((res) => res.data);
}

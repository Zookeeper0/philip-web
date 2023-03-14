import { getPostsListApi } from "@/apis/postsApi";
import { useState, useCallback } from "react";
import { useQuery } from "react-query";

export const usePosts = (filters: any) => {
  // Notice we only use `employees` as query key, because we want to preserve our cache
  return useQuery(["getPostsListApi", filters], getPostsListApi);
};

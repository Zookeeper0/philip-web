import { AdminStorePage } from "@/components/templates/AdminStorePage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useApiError from "@/lib/hooks/useApiError";
import { useRecoilValue } from "recoil";
import { categoryState } from "@/recoil/category";
import { useEffect, useState } from "react";
import {
  getAdminStorePosts,
  promotionAPI,
  promotionRoleAPI,
} from "@/apis/postsApi";
import { useRouter } from "next/router";

const AdminStore = () => {
  const router = useRouter();
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();
  const [error, setError] = useState("");

  const queryClient = useQueryClient();
  const [promotion, setPromotion] = useState(false);
  const { handleError } = useApiError();
  const [storeSearchKeyword, setStoreSearchKeyword] = useState("");
  const currentCategory = useRecoilValue(categoryState);

  /** 업체 목록 불러오기 */
  const { data: dataSource, isLoading } = useQuery(
    ["getAdminStorePosts", storeSearchKeyword, currentCategory, promotion],
    getAdminStorePosts,
    {
      onError(error: any) {
        handleError(error);
      },
    }
  );

  const promotionMutation = useMutation("promotionAPI", promotionAPI, {
    onSuccess() {
      queryClient.refetchQueries("getAdminStorePosts");
    },
  });

  // const openStoreModal = (data: any) => {
  //   setStore(data);
  //   setStoreModal(!storeModal);
  // };

  /** 상세보기 클릭 시 업체정보 수정창 바로가기 */
  const goEdit = (e: any) => {
    // if (userToken || admin?.user) router.push(`/main/post/${item.oid}`);
    // else alert("로그인이 필요한 서비스 입니다.");
    router.push(`/admin/store/edit/${e.oid}`);
  };

  const promotionHandler = (data: any) => {
    promotionMutation.mutate(data.data.oid);
  };

  const changePromotionOrderMutation = useMutation(
    "promotionRoleAPI",
    promotionRoleAPI,
    {
      onSuccess() {
        queryClient.refetchQueries("getAdminStorePosts");
        setError("");
      },
      onError(error: any) {
        const { response } = error;
        setError(response.data.message);
      },
    }
  );

  const onChangeOrder = (
    e: React.ChangeEvent<HTMLSelectElement>,
    data: any
  ) => {
    setError("");
    const datas = {
      oid: data.data.oid,
      order: e.target.value,
    };
    changePromotionOrderMutation.mutate(datas);
  };

  const h = 10;
  const w = 10;
  const orderOptions = Array(h * w)
    .fill(0)
    .map((arr, i) => {
      // (arr: 현재값, i:인덱스)
      return { name: i };
    });

  return (
    <AdminStorePage
      setStoreSearchKeyword={setStoreSearchKeyword}
      setPromotion={setPromotion}
      dataSource={dataSource}
      isLoading={isLoading}
      error={error}
      promotionHandler={promotionHandler}
      orderOptions={orderOptions}
      onChangeOrder={onChangeOrder}
      goEdit={goEdit}
    />
  );
};

export default AdminStore;

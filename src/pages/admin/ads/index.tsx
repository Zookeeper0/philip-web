import { AdminAdsPage } from "@/components/templates/AdminAdsPage";
import {
  addAdsApi,
  deleteAllAdsApi,
  deleteOneAdsApi,
  getAdsData,
} from "@/apis/adsApi";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { InputFile } from "@/components/atoms/Input/InputFile";
import useApiError from "@/lib/hooks/useApiError";
import { deletePreviewImagesAPI, uploadImagesAPI } from "@/apis/postsApi";

const AdminAds = () => {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();
  const [imgPreview, setImgPreview] = useState<any>([{ totem: "" }]);
  const { data: adsData } = useQuery("getAdsData", getAdsData, {
    retry: 1,
    onError(error: any) {
      handleError(error);
    },
  });

  const addAdsMutation = useMutation("addAdsApi", addAdsApi);
  /** 이미지 전체 삭제 */
  const deleteAllAdsMutaion = useMutation("deleteAllAdsApi", deleteAllAdsApi, {
    onSuccess: () => {
      // ✋ 삭제가 성공하면 리스트를 다시 get
      queryClient.invalidateQueries(["getAdsData"]);
    },
  });
  /** 이미지 개별 삭제 */
  const deleteOneAdsMutation = useMutation("deleteOneAdsApi", deleteOneAdsApi, {
    onSuccess: () => {
      // ✋ 삭제가 성공하면 리스트를 다시 get
      queryClient.invalidateQueries(["getAdsData"]);
    },
  });

  /** 이미지 id값에 따라 label 저장 */
  const onChangeImages = (e: any) => {
    e.preventDefault();
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f: any) => {
      imageFormData.append("files", f);
    });
    uploadImagesAPI(imageFormData).then((result) => {
      // taeget.id 따라 label 구분해서 서버로 전송
      result.map((data: any) => (data.label = e.target.id));
      setImgPreview((prev: any) => prev.concat(result));
    });
  };

  /** 광고 저장  */
  const onSubmit = (e: Event) => {
    e.preventDefault();
    alert("저장이 완료되었습니다.");

    addAdsMutation.mutate(imgPreview);
  };

  /** 전체삭제 */
  const onDeleteAll = () => {
    deleteAllAdsMutaion.mutate();
  };

  /** 개별 삭제 */
  const onDeleteOne = (id: string) => {
    deleteOneAdsMutation.mutate(id);
  };

  const onRemovePreviewImage = (isAds: any) => {
    deletePreviewImagesAPI(isAds.filename).then((result) => {
      setImgPreview([
        (prev: any[]) => {
          prev.filter((item: any) => item.label !== isAds.label);
        },
      ]);
    });
  };

  return (
    <AdminAdsPage
      imgPreview={imgPreview}
      setImgPreview={setImgPreview}
      adsData={adsData}
      onChangeImages={onChangeImages}
      onDeleteOne={onDeleteOne}
      onSubmit={onSubmit}
      onRemovePreviewImage={onRemovePreviewImage}
      onDeleteAll={onDeleteAll}
    />
  );
};

export default AdminAds;

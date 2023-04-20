import { addAdsApi, deleteAllAdsApi, deleteOneAdsApi } from "@/apis/adsApi";
import { deletePreviewImagesAPI, uploadImagesAPI } from "@/apis/postsApi";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import { InputAdsFile } from "@/components/atoms/Input/InputAdsFile";
import { InputFile } from "@/components/atoms/Input/InputFile";
import { adsState } from "@/recoil/ads";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import * as S from "./adminAdsBox.style";

export const AmdinAdsBox = ({ setImgPreview, imgPreview }: any) => {
  const addAdsMutation = useMutation("addAdsApi", addAdsApi);

  const adsList = useRecoilValue(adsState);
  const queryClient = useQueryClient();

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
        (prev: any) => {
          prev.filter((item: any) => item.label !== isAds.label);
        },
      ]);
    });
  };

  console.log("imgPreview", imgPreview);

  return (
    <S.AdminAdsBox>
      <S.AdminAdsTit>배너 등록하기</S.AdminAdsTit>
      <S.AdminAdsInput>
        <InputAdsFile
          label="상단배너 등록"
          id="topAds"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.topAds}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
        />
        <InputAdsFile
          label="하단배너-1 등록"
          id="bottom1"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom1}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
        />
        <InputAdsFile
          label="하단배너-2 등록"
          id="bottom2"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom2}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
        />
        <InputAdsFile
          label="하단배너-3 등록"
          id="bottom3"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom3}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
        />
        <ButtonGroup>
          <Button
            type="submit"
            color="primary"
            layout="solid"
            width="90px"
            height={38}
            label="저장"
            onClick={(e: Event) => onSubmit(e)}
          />
          <Button
            type="submit"
            color="func"
            layout="solid"
            width="90px"
            height={38}
            label="전체삭제"
            onClick={onDeleteAll}
          />
        </ButtonGroup>
      </S.AdminAdsInput>
    </S.AdminAdsBox>
  );
};

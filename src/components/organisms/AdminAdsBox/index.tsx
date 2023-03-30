import { addAdsApi, deleteAllAdsApi } from "@/apis/adsApi";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import { InputFile } from "@/components/atoms/Input/InputFile";
import { useState } from "react";
import { useMutation } from "react-query";
import * as S from "./adminAdsBox.style";

export const AmdinAdsBox = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  console.log("imagePaths  :", imagePaths);
  const addAdsMutation = useMutation("addAdsApi", addAdsApi);
  const deleteAllAdsMutaion = useMutation("deleteAllAdsApi", deleteAllAdsApi);

  const onSubmit = () => {
    addAdsMutation.mutate(imagePaths);
  };

  const onDelete = () => {
    deleteAllAdsMutaion.mutate();
  };

  return (
    <S.AdminAdsBox>
      <S.AdminAdsTit>배너 등록하기</S.AdminAdsTit>
      <S.AdminAdsInput>
        <InputFile
          label="상단배너 등록"
          id="topAds"
          setImagePaths={setImagePaths}
        />
        <InputFile
          label="하단배너-1 등록"
          id="bottom1"
          setImagePaths={setImagePaths}
        />
        <InputFile
          label="하단배너-2 등록"
          id="bottom2"
          setImagePaths={setImagePaths}
        />
        <InputFile
          label="하단배너-3 등록"
          id="bottom3"
          setImagePaths={setImagePaths}
        />
        <ButtonGroup>
          <Button
            type="submit"
            color="primary"
            layout="solid"
            width="90px"
            height={38}
            label="저장"
            onClick={onSubmit}
          />
          <Button
            type="submit"
            color="func"
            layout="solid"
            width="90px"
            height={38}
            label="전체삭제"
            onClick={onDelete}
          />
        </ButtonGroup>
      </S.AdminAdsInput>
    </S.AdminAdsBox>
  );
};

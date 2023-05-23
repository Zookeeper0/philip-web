import { Button, ButtonGroup } from "@/components/atoms/Button";
import { InputAdsFile } from "@/components/atoms/Input/InputAdsFile";

import { adsState } from "@/recoil/ads";

import { useRecoilValue } from "recoil";
import * as S from "./adminAdsBox.style";

interface AmdinAdsBoxProps {
  imgPreview: any;
  setImgPreview: React.Dispatch<React.SetStateAction<any>>;
  adsData: [];
  onChangeImages: (e: any) => void;
  onDeleteOne: (id: string) => void;
  onSubmit: (e: Event) => void;
  onRemovePreviewImage: (isAds: any) => void;
  onDeleteAll: () => void;
}

export const AmdinAdsBox = ({
  imgPreview,
  onDeleteOne,
  onSubmit,
  onRemovePreviewImage,
  onDeleteAll,
  adsData,
  onChangeImages,
}: AmdinAdsBoxProps) => {
  const adsList = useRecoilValue(adsState);

  /** 이미지 정보 */
  const topAds = adsData?.find((ads: any) => ads.label === "topAds");
  const btm1 = adsData?.find((ads: any) => ads.label === "bottom1");
  const btm2 = adsData?.find((ads: any) => ads.label === "bottom2");
  const btm3 = adsData?.find((ads: any) => ads.label === "bottom3");

  const newTopAds = imgPreview?.find((ads: any) => ads.label === "topAds");
  const newBtm1 = imgPreview?.find((ads: any) => ads.label === "bottom1");
  const newBtm2 = imgPreview?.find((ads: any) => ads.label === "bottom2");
  const newBtm3 = imgPreview?.find((ads: any) => ads.label === "bottom3");

  return (
    <S.AdminAdsBox>
      <S.AdminAdsTit>배너 등록하기</S.AdminAdsTit>
      <S.AdminAdsInput>
        <InputAdsFile
          label="상단배너"
          id="topAds"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.topAds}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
          file={topAds || newTopAds}
        />
        <InputAdsFile
          label="하단배너-1"
          id="bottom1"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom1}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
          file={btm1 || newBtm1}
        />
        <InputAdsFile
          label="하단배너-2"
          id="bottom2"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom2}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
          file={btm2 || newBtm2}
        />
        <InputAdsFile
          label="하단배너-3"
          id="bottom3"
          onChangeImages={onChangeImages}
          isAds={adsList[0]?.bottom3}
          onDelete={onDeleteOne}
          onRemovePreviewImage={onRemovePreviewImage}
          file={btm3 || newBtm3}
        />
        <ButtonGroup marginTop={20}>
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

import * as S from "./inputFile.style";

export const InputAdsFile = ({
  id,
  onChangeImages,
  label,
  isAds,
  onDelete,
  onRemovePreviewImage,
}: any) => {
  return (
    <S.InputFile>
      <S.FileLabelBox>
        {label && label}
        {isAds ? (
          <label htmlFor={id || "input-img"}>
            삭제
            <input
              type="button"
              id={id || "input-img"}
              multiple
              hidden
              onClick={() => {
                onDelete(isAds.oid), onRemovePreviewImage(isAds);
              }}
            />
          </label>
        ) : (
          <label htmlFor={id || "input-img"}>
            이미지 등록
            <input
              type="file"
              id={id || "input-img"}
              multiple
              hidden
              onChange={onChangeImages}
            />
          </label>
        )}
      </S.FileLabelBox>
    </S.InputFile>
  );
};

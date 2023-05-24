import * as S from "./inputAdsFile.style";

export const InputAdsFile = ({
  id,
  onChangeImages,
  label,
  isAds,
  onDelete,
  onRemovePreviewImage,
  file,
}: any) => {
  console.log(file);
  return (
    <S.InputFile>
      <S.FileLabelBox>
        <S.FileTitBox>{label && label}</S.FileTitBox>

        <S.FileNameBox>
          <span>{file?.originalname}</span>
        </S.FileNameBox>
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

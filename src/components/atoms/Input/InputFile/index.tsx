import Image from "next/image";
import * as S from "./inputFile.style";

export const InputFile = ({
  id,
  onChangeImages,
  onRemoveImage,
  onRemoveServerImage,
  imgPreview,
  imageFromDB,
}: any) => {
  return (
    <S.InputFile>
      <S.FileLabelBox>
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
      </S.FileLabelBox>

      <S.ImgPreviewList>
        {imgPreview?.map((v: any, i: number) => (
          <S.ImgPreviewItem
            key={v?.filename}
            style={{ display: "inline-block" }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${v?.filename}`}
              alt={v}
              width={200}
              height={120}
            />
            <div>
              <button onClick={(e) => onRemoveImage(v, e)}>제거</button>
            </div>
          </S.ImgPreviewItem>
        ))}
        {imageFromDB
          ? imageFromDB.map((img: any, id: number) => (
              <S.ImgPreviewItem key={id} style={{ display: "inline-block" }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${img?.filename}`}
                  alt={img}
                  width={200}
                  height={120}
                />
                <div>
                  <button onClick={(e) => onRemoveServerImage(img, e)}>
                    제거
                  </button>
                </div>
              </S.ImgPreviewItem>
            ))
          : ""}
      </S.ImgPreviewList>
    </S.InputFile>
  );
};

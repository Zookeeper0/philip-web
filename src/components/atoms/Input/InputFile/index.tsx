import { uploadImagesAPI } from "@/apis/postsApi";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../Button";
import * as S from "./inputFile.style";

// AdminAdsBox에 종속되어버림, 해결필요
export const InputFile = ({
  id,
  onChangeImages,
  onRemoveImage,
  onRemoveServerImage,
  imgPreview,
  imageFromDB,
}: any) => {
  // const [fileName, setFileName] = useState("");
  // const [imgPreview, setImgPreview] = useState<string[]>([]);

  // /** 이미지 id값에 따라 label 저장 */
  // const onChangeImages = (e: any) => {
  //   e.preventDefault();
  //   console.log("e.target : ", e.target.id);
  //   const imageFormData = new FormData();
  //   [].forEach.call(e.target.files, (f: any) => {
  //     imageFormData.append("files", f);
  //   });
  //   uploadImagesAPI(imageFormData).then((result) => {
  //     // taeget.id 따라 label 구분해서 서버로 전송
  //     result.map((data: any) => (data.label = e.target.id));
  //     setImgPreview((prev) => prev.concat(result));
  //     setImagePaths((prev: any) => prev.concat(result));
  //   });
  // };

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

import { uploadImagesAPI } from "@/apis/postsApi";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../Button";
import * as S from "./inputFile.style";

interface InputFile {
  label?: string;
  multiple?: any;
  id?: string;
  setImagePaths?: React.Dispatch<React.SetStateAction<string>>;
}

// AdminAdsBox에 종속되어버림, 해결필요
export const InputFile = ({ label, multiple, id, setImagePaths }: any) => {
  const [fileName, setFileName] = useState("");
  const [imgPreview, setImgPreview] = useState<string[]>([]);

  /** 이미지 id값에 따라 label 저장 */
  const onChangeImages = (e: any) => {
    e.preventDefault();
    console.log("e.target : ", e.target.id);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f: any) => {
      imageFormData.append("files", f);
    });
    uploadImagesAPI(imageFormData).then((result) => {
      // taeget.id 따라 label 구분해서 서버로 전송
      result.map((data: any) => (data.label = e.target.id));
      setImgPreview((prev) => prev.concat(result));
      setImagePaths((prev: any) => prev.concat(result));
    });
  };

  return (
    <S.InputFile>
      <S.FileLabelBox multiple={multiple}>
        {label && label}
        <label htmlFor={id || "input-img"} onChange={onChangeImages}>
          이미지 등록
          <input
            type="file"
            id={id || "input-img"}
            hidden
            multiple={multiple}
          />
        </label>
        {multiple && <>이미지는 최대 5장까지 등록 가능합니다.</>}
      </S.FileLabelBox>

      <S.ImgPreviewList>
        {imgPreview.map((img: any, id) => (
          <>
            <S.ImgPreviewItem key={id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${img?.filename}`}
                alt={img}
                layout="fill"
              />
            </S.ImgPreviewItem>
            <div>
              {/* <button onClick={(e) => onRemoveImage(img, id, e)}>제거</button> */}
              <button>제거</button>
            </div>
          </>
        ))}
      </S.ImgPreviewList>
    </S.InputFile>
  );
};

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../Button";
import * as S from "./inputFile.style";

export const InputFile = ({ label, multiple }: any) => {
  const [fileName, setFileName] = useState("");
  const [imgPreview, setImgPreview] = useState([]);

  /** 이미지 미리보기 설정 */
  const handleAddImgs = (e: any) => {
    const imgList = e.target.files;
    let imgUrlLists: any = [...imgPreview];

    for (let i = 0; i < imgList.length; i++) {
      const currentImgUrl = URL.createObjectURL(imgList[i]);
      imgUrlLists.push(currentImgUrl);
    }

    if (imgUrlLists.length > 5) {
      imgUrlLists = imgUrlLists.slice(0, 5);
    }

    setImgPreview(imgUrlLists);
  };
  return (
    <S.InputFile>
      <S.FileLabelBox multiple={multiple}>
        {label && label}
        <label htmlFor="input-img" onChange={handleAddImgs}>
          이미지 등록
          <input type="file" id="input-img" hidden multiple={multiple} />
        </label>
        {multiple && <>이미지는 최대 5장까지 등록 가능합니다.</>}
      </S.FileLabelBox>
      {multiple && (
        <S.ImgPreviewList>
          {imgPreview.map((img, id) => (
            <S.ImgPreviewItem key={id}>
              <Image src={img} alt={`${img}-${id}`} layout="fill" />
            </S.ImgPreviewItem>
          ))}
        </S.ImgPreviewList>
      )}
    </S.InputFile>
  );
};

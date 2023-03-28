import { Button, ButtonGroup } from "@/components/atoms/Button";
import { InputFile } from "@/components/atoms/Input/InputFile";
import * as S from "./adminAdsBox.style";

export const AmdinAdsBox = () => {
  return (
    <S.AdminAdsBox>
      <S.AdminAdsTit>배너 등록하기</S.AdminAdsTit>
      <S.AdminAdsInput>
        <InputFile label="상단배너 등록" />
        <InputFile label="하단배너-1 등록" />
        <InputFile label="하단배너-2 등록" />
        <InputFile label="하단배너-3 등록" />
        <ButtonGroup>
          <Button
            type="submit"
            color="primary"
            layout="solid"
            width="90px"
            height={38}
            label="저장"
          />
          <Button
            type="submit"
            color="func"
            layout="solid"
            width="90px"
            height={38}
            label="전체삭제"
          />
        </ButtonGroup>
      </S.AdminAdsInput>
    </S.AdminAdsBox>
  );
};

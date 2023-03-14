import * as S from "../Input.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  themeType: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export const InputText: React.FC<TextProps> = ({
  width,
  size,
  themeType,
  label,
  placeholder,
  register,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
      <label>
        {label && label}
        <input type="text" placeholder={placeholder} {...register} />
      </label>
    </S.InputCommon>
  );
};

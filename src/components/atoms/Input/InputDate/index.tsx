import * as S from "../Input.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  layout: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export const InputDate: React.FC<TextProps> = ({
  width,
  size,
  layout,
  label,
  placeholder,
  register,
}) => {
  return (
    <S.InputCommon layout={layout} size={size} width={width}>
      <label>
        {label && label}
        <input type="date" placeholder={placeholder} {...register} />
      </label>
    </S.InputCommon>
  );
};

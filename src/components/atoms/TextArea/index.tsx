import * as S from "./textarea.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  layout: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  onChange?: any;
}

export const TextArea: React.FC<TextProps> = ({
  width,
  size,
  layout,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <S.InputCommon layout={layout} size={size} width={width}>
      <label>
        {label && label}
        <textarea placeholder={placeholder} {...register} onChange={onChange} />
      </label>
    </S.InputCommon>
  );
};

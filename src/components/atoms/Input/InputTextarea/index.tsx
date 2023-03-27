import * as S from "../Input.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  layout: string;
  themeType: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  onChange?: any;
}

export const InputTextarea: React.FC<TextProps> = ({
  width,
  size,
  layout,
  themeType,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <S.InputCommon
      themeType={themeType}
      layout={layout}
      size={size}
      width={width}
    >
      <label>
        {label && label}
        <textarea placeholder={placeholder} {...register} onChange={onChange} />
      </label>
    </S.InputCommon>
  );
};

import * as S from "../Input.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  layout: string;
  themeType?: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  onChange?: any;
  value?: any;
  type?: string;
}

export const InputText: React.FC<TextProps> = ({
  width,
  size,
  layout,
  themeType,
  label,
  placeholder,
  register,
  onChange,
  value,
  type,
}) => {
  return (
    <S.InputCommon
      layout={layout}
      themeType={themeType}
      size={size}
      width={width}
    >
      <label>
        {label && label}
        <input
          type={type || "text"}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
          value={value}
        />
      </label>
    </S.InputCommon>
  );
};

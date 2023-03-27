import * as S from "../Input.style";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps {
  width?: string;
  size: string;
  themeType: string;
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
  themeType,
  label,
  placeholder,
  register,
  onChange,
  value,
  type,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
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

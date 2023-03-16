import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import * as S from "../Input.style";

interface SelectProps {
  width?: string;
  size: string;
  themeType: string;
  label?: string;
  placeholder?: string;
  options: any;
  register?: UseFormRegisterReturn;
}

export const InputSelect: React.FC<SelectProps> = ({
  width,
  themeType,
  size,
  options,
  label,
  placeholder,
  register,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
      <label>
        {label && label}
        <select {...register}>
          {placeholder && <option>{placeholder}</option>}
          {options?.map((option: any, idx: number) => {
            return (
              <option key={idx} value={option.oid}>
                {option.name}
              </option>
            );
          })}
        </select>
      </label>
    </S.InputCommon>
  );
};

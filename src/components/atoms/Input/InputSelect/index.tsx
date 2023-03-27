import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import * as S from "../Input.style";

interface SelectProps {
  width?: string;
  size: string;
  layout: string;
  label?: string;
  placeholder?: string;
  options: any;
  register?: UseFormRegisterReturn;
  onChange?: any;
}

export const InputSelect: React.FC<SelectProps> = ({
  width,
  layout,
  size,
  options,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <S.InputCommon layout={layout} size={size} width={width}>
      <label>
        {label && label}
        <select {...register} onChange={onChange}>
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

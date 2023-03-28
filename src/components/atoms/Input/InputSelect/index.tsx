import { cityState } from "@/recoil/city";
import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { useRecoilValue } from "recoil";
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
  value?: any;
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
  value,
}) => {
  const [name, setName] = useState<any>();

  useEffect(() => {
    const value = localStorage.getItem("city");
    setName(value);
  }, [value]);

  return (
    <S.InputCommon layout={layout} size={size} width={width}>
      <label>
        {label && label}
        <select {...register} onChange={onChange} value={value || name}>
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

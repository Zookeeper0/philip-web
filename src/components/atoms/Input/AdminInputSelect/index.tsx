import { cityState } from "@/recoil/city";
import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { useRecoilValue } from "recoil";
import * as S from "../Input.style";

interface SelectProps {
  width?: string;
  size: string;
  themeType: string;
  label?: string;
  placeholder?: string;
  options: any;
  register?: UseFormRegisterReturn;
  onChange?: any;
}

export const AdminInputSelect: React.FC<SelectProps> = ({
  width,
  themeType,
  size,
  options,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
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

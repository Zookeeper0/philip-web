import * as S from "../Input.style";

interface SelectProps {
  width?: string;
  size: string;
  themeType: string;
  label?: string;
  placeholder?: string;
  options: any;
}

export const InputSelect: React.FC<SelectProps> = ({
  width,
  themeType,
  size,
  options,
  label,
  placeholder,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
      <label>
        {label && label}
        <select>
          {placeholder && <option>{placeholder}</option>}
          {options.map((option: any, idx: number) => {
            return <option key={idx}>{option.name}</option>;
          })}
        </select>
      </label>
    </S.InputCommon>
  );
};

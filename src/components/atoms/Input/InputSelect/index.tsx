import * as S from "../Input.style";

interface SelectProps {
  size: string;
  themeType: string;
  options: any;
  label?: string;
  placeholder?: string;
}

export const InputSelect: React.FC<SelectProps> = ({
  themeType,
  size,
  options,
  label,
  placeholder,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size}>
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

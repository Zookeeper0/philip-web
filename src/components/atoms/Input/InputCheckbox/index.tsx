import * as S from "../Input.style";

interface CheckProps {
  themeType: string;
  label?: string;
  value?: any;
  displayValue?: string;
}

export const InputCheckbox: React.FC<CheckProps> = ({
  themeType,
  label,
  value,
  displayValue,
}) => {
  return (
    <S.InputCommon themeType={themeType}>
      <label>
        {label && label}
        <input type="checkbox" value={value} />
        <span className="displayValue">{displayValue && displayValue}</span>
      </label>
    </S.InputCommon>
  );
};

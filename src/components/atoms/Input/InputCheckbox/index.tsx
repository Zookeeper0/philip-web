import * as S from "../Input.style";

interface CheckProps {
  layout: string;
  themeType?: string;
  label?: string;
  value?: any;
  displayValue?: string;
}

export const InputCheckbox: React.FC<CheckProps> = ({
  layout,
  themeType,
  label,
  value,
  displayValue,
}) => {
  return (
    <S.InputCommon layout={layout} themeType={themeType}>
      <label>
        {label && label}
        <input type="checkbox" value={value} />
        <span className="displayValue">{displayValue && displayValue}</span>
      </label>
    </S.InputCommon>
  );
};

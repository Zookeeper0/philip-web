import * as S from "../Input.style";

interface TextProps {
  width?: string;
  size: string;
  themeType: string;
  label?: string;
  placeholder?: string;
}

export const InputText: React.FC<TextProps> = ({
  width,
  size,
  themeType,
  label,
  placeholder,
}) => {
  return (
    <S.InputCommon themeType={themeType} size={size} width={width}>
      <label>
        {label && label}
        <input type="text" placeholder={placeholder} />
      </label>
    </S.InputCommon>
  );
};

import { Button } from "..";
import IconCopy from "public/assets/svg/icon-copy.svg";
import { useCallback } from "react";

interface CopyProps {
  label: string;
  text: string;
}

export const CopyButton: React.FC<CopyProps> = ({ label, text }) => {
  const handleCopy = useCallback(
    (e: string) => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(e)
          .then(() => {
            alert("클립보드에 복사되었습니다.");
          })
          .catch(() => {
            alert("복사를 다시 시도해주세요.");
          });
      } else {
        if (!document.queryCommandSupported("copy")) {
          return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }

        const textarea = document.createElement("textarea");
        textarea.value = e;
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.position = "fixed";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.body.removeChild(textarea);

        alert("클립보드에 복사되었습니다.");
      }
    },
    [text, label]
  );
  return (
    <Button
      type="button"
      width="90px"
      height={30}
      color="func"
      layout="icon"
      label={label}
      onClick={() => handleCopy(text)}
    >
      <IconCopy />
    </Button>
  );
};

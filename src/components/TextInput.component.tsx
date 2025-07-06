import * as S from "@styles/components/TextInput.styles";
import { FC, InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput: FC<InputWithLabelProps> = ({ label, ...rest }) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.StyledInput {...rest} />
    </S.InputWrapper>
  );
};

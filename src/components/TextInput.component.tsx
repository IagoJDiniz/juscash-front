import * as S from "@styles/components/TextInput.styles";
import { FC, InputHTMLAttributes, useState } from "react";
import { faEye as farFaEye } from "@fortawesome/free-regular-svg-icons/faEye";
import { faEyeSlash as farFaEyeSlash } from "@fortawesome/free-regular-svg-icons/faEyeSlash";
import { mainColors } from "@utils/colors";
import { Row } from "@styles/Common.styles";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const TextInput: FC<InputWithLabelProps> = ({ label, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <S.InputWrapper>
      <Row>
        <S.Label>{label}</S.Label>
        {rest.required && <S.Label color={mainColors.error}>*</S.Label>}
      </Row>
      <S.StyledInput
        {...rest}
        type={
          //Tratativa para mostrar a senha ao clicar no botão em campos tipo password
          rest.type === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : rest.type
        }
      />
      {rest.error && <span>{rest.error}</span>}
      {rest.type === "password" && (
        <S.Icon
          icon={passwordVisible ? farFaEye : farFaEyeSlash}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
          size="lg"
        />
      )}
    </S.InputWrapper>
  );
};

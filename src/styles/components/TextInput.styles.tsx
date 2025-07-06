import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainColors } from "@utils/colors";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  position: relative;

  span {
    font-size: 12px;
    color: red;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 8px;
  color: #a5a5a5;
`;

export const Label = styled.label<{
  color?: string;
}>`
  font-size: 14px;
  color: ${({ color }) => (color ? color : mainColors.secondary)};
  font-family: "Inter";
  font-weight: 600;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0px 4px;
  border: 1px solid ${mainColors.inputBorders};
`;

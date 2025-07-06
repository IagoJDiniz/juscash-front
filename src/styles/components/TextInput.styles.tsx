import styled from "styled-components";

import { mainColors } from "@utils/colors";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${mainColors.secondary};
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

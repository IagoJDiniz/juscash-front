import { mainColors } from "@utils/colors";
import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div<{ size?: number }>`
  width: ${({ size }) => `${size || 40}px`};
  height: ${({ size }) => `${size || 40}px`};
  border-radius: 50%;
  border: 3px solid ${mainColors.primary};
  border-top-color: transparent;
  border-right-color: transparent;
  animation: ${rotateAnimation} 1s linear infinite;
`;

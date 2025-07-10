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

  width: 50px;
  height: 50px;
  border-radius: 10px;

  position: sticky;
  top: 4px;
  left: 8px;

  margin-top: 4px;
  background-color: white;
  z-index: 2;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
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

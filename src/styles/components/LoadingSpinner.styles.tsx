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

  width: 40px;
  height: 40px;
  border-radius: 50%;

  position: sticky;
  top: 4px;
  left: 8px;

  margin-top: 4px;
  background-color: white;
  z-index: 2;

  animation: ${rotateAnimation} 1s linear infinite;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const SpinningLogo = styled.img`
  width: 30px;
  height: 30px;

  margin-top: -3px;
  margin-left: 2px;
`;

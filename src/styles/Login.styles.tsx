import { mainColors } from "@utils/colors";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 40px 0px;
`;

export const LoginButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: ${mainColors.primary};

  width: 120px;
  height: 32px;

  border-radius: 6px;

  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
  color: white;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #23984f;
  }
`;

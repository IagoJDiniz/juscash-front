import { mainColors } from "@utils/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  margin: 40px 0px;
`;

export const RegisterButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: ${mainColors.primary};

  width: 120px;
  height: 32px;

  border-radius: 6px;

  font-size: 16px;
  font-weight: 700;
  color: white;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #23984f;
  }
`;

export const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;

  a {
    text-decoration: none;
  }
`;

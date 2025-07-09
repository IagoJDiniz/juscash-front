import styled from "styled-components";

export const Row = styled.div<{
  alignCenter?: boolean;
  justifyCenter?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyCenter }) =>
    justifyCenter ? "center" : "flex-start"};
  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "flex-start")};
`;

export const Column = styled.div<{
  alignCenter?: boolean;
  justifyCenter?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyCenter }) =>
    justifyCenter ? "center" : "flex-start"};
  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "flex-start")};
`;

export const AuthFormsCentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  gap: 30px;

  min-height: 100vh;
  width: 680px;
  max-width: 100vw;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px 90px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

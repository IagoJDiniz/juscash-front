import { mainColors } from "@utils/colors";
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* fundo escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;

  h3 {
    color: ${mainColors.secondary};
  }
`;

export const ContentContainer = styled.div`
  padding: 1rem;

  * {
    color: #506975;
  }
  p {
    margin-top: 16px;
  }
  li {
    margin-left: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  color: gray;
`;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 16px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;
export const Icon = styled(FontAwesomeIcon)`
  color: #506975;
`;

export const LogoutButton = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    font-size: 14px;
    margin-left: 8px;
    font-weight: 400;
    color: #506975;
  }

  cursor: pointer;

  @media (max-width: 500px) {
    h3 {
      display: none;
    }
  }
  @keyframes swing {
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(5deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  &:hover {
    ${Icon} {
      transform-origin: top center;
      animation: swing 2s ease infinite;
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

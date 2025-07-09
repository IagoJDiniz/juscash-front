import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainColors } from "@utils/colors";
import styled from "styled-components";
import { Row } from "./Common.styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 1200px) {
    align-items: start;
  }
`;
export const KanbanWrapper = styled.div`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 1rem 2rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1180px;
  max-width: 100vw;

  ${Row} {
    width: 50%;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    gap: 16px;
    margin-top: 8px;
    margin-left: 20px;
    ${Row} {
      width: 100%;
    }
  }
`;

export const SectionHeader = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-right: 50px;
  color: ${mainColors.secondary};
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  color: mainColors.secondary,
})`
  margin-right: 8px;
`;

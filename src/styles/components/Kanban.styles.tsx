import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "@styles/Common.styles";
import { mainColors } from "@utils/colors";
import styled from "styled-components";

export const KanbanContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100vw;
  justify-content: center;

  max-width: 100%;

  overflow-x: scroll;

  @media (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const KanbanColumn = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  min-height: 500px;
  background: #f4f5f7;
  border-radius: 8px;

  ${Row} {
    width: 100%;
    padding: 16px 12px;
    margin-bottom: 14px;
    border-radius: 2px;
    border: 1px solid #d3d3d3;
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
  }
  h2 {
    font-size: 12px;
    font-weight: 400;
    margin-left: 14px;
    color: #a5a5a5;
  }
`;

export const KanbanCard = styled.div`
  width: 250px;
  margin-left: 15px;
  padding: 12px 8px;
  margin-bottom: 8px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 12px;
    font-weight: 600;
    padding: 0px;
    color: #4b5863;
    margin: 0px;
  }
  h3 {
    font-size: 10px;
    font-weight: 400;
    color: #4b5863;
    padding: 0px;
    margin: 0px 24px 0px 0px;
  }
  ${Row} {
    border: none;
    padding: 0px;
    margin-top: 16px;
    margin-bottom: 0px;
  }
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  color: ${mainColors.primary};
`;
export const CardIcon = styled(FontAwesomeIcon)`
  margin: 0px 4px 0px 0px;
  padding: 0px;
  color: #4b5863;
`;

export const EmptyMessage = styled.h4`
  font-size: 14px;
  width: 100%;
  text-align: center;
  font-weight: 400;
  color: #4b5863;
  padding: 0px;
  margin: 24px 0px;
`;

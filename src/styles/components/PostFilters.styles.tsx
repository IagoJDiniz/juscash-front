import { mainColors } from "@utils/colors";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  padding-top: 46px;
  span {
    color: ${mainColors.secondary};
  }

  @media (max-width: 768px) {
    width: 92vw;
    padding-top: 0px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${mainColors.secondary};
`;

export const TextInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  padding: 0px 4px;
  border: 1px solid ${mainColors.inputBorders};
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  input {
    height: 30px;
    width: 120px;
    padding-left: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  span {
    font-weight: 500;
  }
`;

export const SearchButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #27ae60;
  }
`;

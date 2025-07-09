import { mainColors } from "@utils/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;

  @media (max-width: 830px) {
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

  @media (max-width: 1200px) {
    width: 380px;
    padding-top: 0px;
  }
  @media (max-width: 830px) {
    width: 100%;
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

  @media (max-width: 830px) {
    width: 375px;
    max-width: 90vw;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

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

  @media (max-width: 424px) {
    flex-direction: column;
    align-items: flex-start;
    .react-datepicker-popper {
      margin-left: 8px;
    }
  }

  @media (min-width: 831px) and (max-width: 1200px) {
    //Alinhando o datepicker direito em telas médias
    .right-datepicker .react-datepicker-popper {
      margin-left: -18px;
    }
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
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

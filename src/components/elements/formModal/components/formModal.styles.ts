import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Form = styled.form`
  min-width: 260px;
  box-sizing: border-box;
  padding: 20px;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "item1 item2"
    "item3 item4"
    "item5 item6"
    "item7 item7";

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "item1"
      "item2"
      "item3"
      "item4"
      "item5"
      "item6"
      "item7";
  }
`;

export const Button = styled.button`
  outline: none;
  box-shadow: none;
  border: none;
  width: 100%;
  background-color: ${theme.colors.highlight};
  padding: 10px 20px;
  border-radius: 4px;
  color: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FormElement = styled.div`
  box-sizing: border-box;
  width: 100%;

  input,
  select {
    padding: 8px;
    background-color: ${theme.colors.neutral};
    border-radius: 4px;
    outline: none;
    border: none;
    margin-top: 5px;
    box-sizing: border-box;
    width: 100%;
  }
`;

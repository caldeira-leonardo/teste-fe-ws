import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${theme.colors.background};
  color: ${theme.colors.white};
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  outline: none;
  box-shadow: none;
  border: none;
  margin-left: auto;
  background-color: ${theme.colors.highlight};
  padding: 10px 20px;
  border-radius: 4px;
  color: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Brand = styled.h2`
  margin: 0;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minMax(250px, 0.4fr));
  box-sizing: border-box;
  margin-bottom: 10px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minMax(250px, 1fr));
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

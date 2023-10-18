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
`;

export const Filtros = styled.p`
  margin-top: 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minMax(250px, 0.4fr));
  box-sizing: border-box;
`;

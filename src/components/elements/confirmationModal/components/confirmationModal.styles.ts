import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  background-color: ${theme.colors.background};
  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.white};
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const CancelButton = styled(SubmitButton)`
  background-color: ${theme.colors.error};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.titleHighlight};
  margin: 0;
`;

export const Highlighted = styled.span`
  font-size: 20px;
  color: ${theme.colors.highlight};
  font-weight: bold;
`;

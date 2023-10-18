import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const Header = styled.header`
  height: 15vh;
  box-sizing: border-box;
  background-color: ${theme.colors.background};
  padding: 20px;

  display: flex;
  align-items: center;

  p {
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
export const Button = styled.button`
  outline: none;
  box-shadow: none;
  border: none;
`;

export const Main = styled.main`
  height: 85vh;
  max-height: 85vh;
  box-sizing: border-box;
  overflow: auto;
`;

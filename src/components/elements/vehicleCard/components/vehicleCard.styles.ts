import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.white};
  background-image: linear-gradient(#fff, #3b3b3b);
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://svgsilh.com/svg/1299198.svg");
  background-size: 130px 130px;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: en;
  padding: 0;
  margin: 0;
`;

export const Title = styled.p`
  padding: 0;
  margin: 0;
`;

export const Price = styled.p`
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const EditIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.highlight};
  padding: 4px;
  border-radius: 50%;
`;

export const RemoveIconWrapper = styled(EditIconWrapper)`
  right: 60px;
  background-color: ${theme.colors.error};
`;

import styled from "styled-components";
import { theme } from "~/theme/theme";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 450px;
  height: 100%;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  opacity: 0.4;
  background-image: url("https://svgsilh.com/svg/1299198.svg");
  background-size: 230px 230px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HorizontalSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #00000040;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 50px;
  background-color: #00000040;
  margin: 0 10px;
`;

export const VehicleInfosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px 0;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const VehicleInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0 10px;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${theme.colors.highlight};
  font-weight: bold;
  text-align: center;
`;

export const Valor = styled.h1`
  color: ${theme.colors.title};
  text-align: center;
  margin-top: 0;
`;

export const ModalTitle = styled.h2`
  letter-spacing: 0.2rem;
  color: ${theme.colors.title};
  text-align: center;
  margin: 0;
`;

export const CloseIcon = styled.div`
  padding: 5px;
  background-color: ${theme.colors.titleHighlight};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${theme.colors.white};
  cursor: pointer;
`;

export const customStyles = {
  overlay: {
    background: "#00000090",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "auto",
    borderRadius: "8px",
    maxHeight: "90%",
    maxWidth: "90%",
  },
};

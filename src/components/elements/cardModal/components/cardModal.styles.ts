import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

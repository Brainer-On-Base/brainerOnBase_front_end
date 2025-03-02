import styled from "styled-components";

export const BackArrow = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme, background }) =>
    theme?.[background] ?? background ?? theme.shadePurpleDark};
  border-radius: 100%;
  position: fixed; /* Cambiado de absolute a fixed */
  margin: ${({ margin }) => margin ?? "2em"};
  right: 10px; /* Siempre en la esquina derecha */
  bottom: 10px; /* Siempre en la esquina inferior */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  img {
    width: 30px;
    height: 30px;
  }
`;

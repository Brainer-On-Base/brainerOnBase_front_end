import styled from "styled-components";

export const CoinContainer = styled.p`
  background: ${({ theme, background }) =>
    background
      ? theme[background]
      : background
      ? background
      : theme.shadePurpleDark2};
  width: 100%;
  min-width: auto;
  padding-right: 10px;
  border-radius: 20px;
  font-size: var(--h5);
  font-weight: var(--weight-regular);
  color: ${({ theme, color }) =>
    theme[color] ? theme[color] : color ? color : theme.purpleLight} !important;
  text-align: center;
  z-index: 10;
  display: flex;
  align-items: center;
  img {
    width: 53px;
    height: 46px;
    margin-right: 10px;
  }
`;

export const CoinLabel = styled.label`
  font-size: ${({ labelSize }) =>
    labelSize || "var(--p16)"}; /* Tamaño de fuente del label */
  color: ${({ labelColor, theme }) =>
    labelColor || theme.purpleMedium}; /* Color del label */
  font-weight: ${({ labelWeight }) => labelWeight || "var(--weight-regular)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CoinLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "column"};
  width: ${({ width }) => width || "auto"};
`;
